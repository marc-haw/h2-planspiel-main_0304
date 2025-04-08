<script lang="ts">
  import { resetH2 } from "../state.svelte.js";
  import Leaf from "./Leaf.svelte";

  let { percentage = 0, id } = $props();

  let translateX = $state("");

  const maskSrc = `/leaf${id}.png`;

  $effect(() => {
    if (percentage > 20) {
      translateX = `${percentage}% + 384px`;
    } else {
      translateX = " ";
    }
    if (resetH2.state === true) {
      percentage = 0;
      translateX = " ";
    }
  });
</script>

<!-- <section class="relative flex w-96 rounded-full h-4  overflow-clip transition">
                <div class="gradient transition"   style="transform: {`translateX(calc(-${translateX}))`};"></div>
             
</section> -->

{#if id !== 5}

<!-- Wrapper, der sich an die Bildgröße anpasst -->
<div class="relative inline-block h-28 w-fit  mx-auto my-auto">
    <!-- Bild, das die Größe bestimmt -->
    <img src={maskSrc} alt="" class=" h-full opacity-10" />
  
    <!-- Maske exakt über dem Bild, mit dynamischer Füllung -->
    <div
      class="absolute inset-0 z-10 dop-shadow-lg"
      style="
        mask-image: url({maskSrc});
        -webkit-mask-image: url({maskSrc});
        mask-size: auto 100%;
        -webkit-mask-size: auto 100%;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-position: center;
        -webkit-mask-position: center;
        background-color: transparent;
      "
    >
      <div
        class="absolute top-0 left-0 h-full transition-all duration-300 bg-gradient-to-t from-lime-400 via-green-400 to-emerald-300"
        style="width: {percentage}%;"
      ></div>
    </div>
  </div>


    <!-- <div
      class="mask-leaf relative h-32 z-20 bg-gray-950/10 m"
      style="mask-image: url('/leaf{id}.png'); -webkit-mask-image: url('/leaf{id}.png');"
    >
      <div
        class="absolute top-0 h-full bg-linear-to-t from-lime-400 via-green-400 to-emerald-300 transition-all duration-300 rounded-r-full"
        style="width: {`calc(${percentage} * 1.05%)`};"
      ></div>
    
    </div> -->


    <!-- <img
      class="absolute top-0 z-0 opacity-10 h-32"
      src="/leaf{id}.png"
      alt="leaf5"
    /> -->

    <!-- <div class="absolute top-0 flex">
    {#each Array.from({ length: 5}, (_, i) => i)}
<Leaf classes="size-24 fill-green-300/20"/>
{/each}
</div> -->

{:else}

<img src="/noco2.png" class="size-28 mx-auto my-auto opacity-50 " alt="CO2 Einsparung gering" style="filter: brightness(0) saturate(100%) invert(59%) sepia(55%) saturate(557%) hue-rotate(314deg) brightness(92%) contrast(113%);"/>
  
{/if}

<style>
  .gradient {
    position: absolute;
    width: 1800px;
    height: 45px;
    background: rgb(121, 9, 51);
    background: linear-gradient(
      90deg,
      rgb(175, 17, 75) 0%,
      rgb(225, 255, 105) 50%,
      rgb(115, 255, 105) 100%
    );
  }

  .mask-leaf {
    mask-repeat: no-repeat;
    mask-size: auto 100%;
    -webkit-mask-size: auto 100%;
    mask-position: start;
    -webkit-mask-position: start;
  }
</style>
