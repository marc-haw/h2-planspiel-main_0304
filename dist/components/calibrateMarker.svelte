<script>
  let calibrating = false;
  let calibrationData = null;
  let showModal = false;

  function startCalibration() {
    calibrationData = null;
    calibrating = true;
    alert('Lege den PUK auf den Tisch, um ihn anzulernen.');
  }

  // Berechnet den Schwerpunkt (Centroid) einer Punktmenge
  function centroid(points) {
    const sum = points.reduce((acc, p) => ({ x: acc.x + p.x, y: acc.y + p.y }), { x: 0, y: 0 });
    return { x: sum.x / points.length, y: sum.y / points.length };
  }

  // Vergleicht zwei Sätze von Touchdaten
  function isMatchingPUK(calib, current) {
    const centroidCalib = centroid(calib);
    const centroidCurrent = centroid(current);
    const centroidTolerance = 30;
    const dx = centroidCalib.x - centroidCurrent.x;
    const dy = centroidCalib.y - centroidCurrent.y;
    if (Math.sqrt(dx * dx + dy * dy) > centroidTolerance) return false;

    const distancesCalib = calib.map(p => Math.hypot(p.x - centroidCalib.x, p.y - centroidCalib.y));
    const distancesCurrent = current.map(p => Math.hypot(p.x - centroidCurrent.x, p.y - centroidCurrent.y));

    const distanceTolerance = 30;
    for (let i = 0; i < 3; i++) {
      if (Math.abs(distancesCalib[i] - distancesCurrent[i]) > distanceTolerance) {
        return false;
      }
    }
    return true;
  }

  // Globale Touch-Event-Handler
  function handleTouch(event) {
    if (event.touches.length !== 3) {
      showModal = false;
      return;
    }
    
    const currentTouches = Array.from(event.touches).map(touch => ({
      x: touch.clientX,
      y: touch.clientY
    }));

    if (calibrating) {
      calibrationData = currentTouches;
      calibrating = false;
      alert('Kalibrierung abgeschlossen!');
    } else if (calibrationData) {
      if (isMatchingPUK(calibrationData, currentTouches)) {
        showModal = true;
      } else {
        showModal = false;
      }
    }
  }
</script>

<svelte:window
  on:touchstart={handleTouch}
  on:touchmove={handleTouch}
  on:touchend={handleTouch} />

<!-- Button um den Kalibrierungsmodus zu aktivieren -->
<button on:click={startCalibration}>
  PUK anlernen
</button>

{#if showModal}
  <div class="modal">
    <p>PUK erkannt!</p>
    <button on:click={() => showModal = false}>Schließen</button>
  </div>
{/if}

<!-- Anzeige der gespeicherten Kalibrierungsdaten oben rechts -->
{#if calibrationData}
  <div class="calibration-data">
    <h3>Kalibrierungsdaten:</h3>
    <ul>
      {#each calibrationData as point, i}
        <li>Touch {i + 1}: (x: {point.x.toFixed(0)}, y: {point.y.toFixed(0)})</li>
      {/each}
    </ul>
    <h3>Touchdaten:</h3>
    <ul>
      {#each currentTouches as point, i}
        <li>Touch {i + 1}: (x: {point.x.toFixed(0)}, y: {point.y.toFixed(0)})</li>
      {/each}
    </ul>
    <div>{showModal}</div>
  </div>
{/if}

<style>
  .calibration-data {
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
    padding: 1rem;
    margin: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
</style>
