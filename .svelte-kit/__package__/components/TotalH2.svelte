<script lang="ts">
  import { totalH2State, resetH2, h2Count } from "../state.svelte.ts";

  let { activePhase = $bindable() } = $props();

  $effect(() => {
    if (totalH2State.availableH2 < 0) {
      totalH2State.availableH2 = 0;
    }
    if (resetH2.state === true) {
      totalH2State.availableH2 = 30;
      h2Count.metal = 0;
      h2Count.maritim = 0;
      h2Count.hanse = 0;
      h2Count.bio = 0;
      h2Count.hospital = 0;
      h2Count.bakery = 0;
    }
  });

  const handleReset = () => {
    resetH2.state = true;
  };
</script>

<div
  class="glass flex justify-center w-2/3 gap-16 p-10 px-20 mt-5 rounded-full items-center"
>
  <div
    class="relative flex flex-col items-center p-10 px-20 rounded-full gap-10"
  >
    <div class="flex items-center gap-4 text-slate-200 text-3xl font-bold">
      <div class="">Verfügbare H<sub>2</sub> Einheiten:</div>
      <div class="transition" class:text-red-400={totalH2State.availableH2 < 1}>
        {totalH2State.availableH2} / 30
      </div>
    </div>

    <button
      onclick={handleReset}
      class="absolute rounded-full border border-slate-200 p-2 top-8 right-[500px] text-slate-200 active:bg-slate-400 transition"
      >H<sub>2</sub> reset</button
    >

    <div class="relative w-full">
      <div class="flex items-center gap-1">
        {#each Array.from({ length: 30 }, (_, i) => i)}
          <div class="bg-cyan-200/10 w-12 h-16 rounded-xl"></div>
        {/each}
      </div>
      <div class="absolute top-0 flex items-center gap-1">
        {#each Array.from({ length: totalH2State.availableH2 }, (_, i) => i)}
          <div
            class="bg-gradient-to-t from-sky-300 to-cyan-200 w-12 h-16 rounded-xl"
          ></div>
        {/each}
      </div>
    </div>
  </div>
{#if activePhase === 'd'}
  <div class="flex flex-col items-center gap-6 font-bold text-slate-200">
    <div class="text-3xl">
      Markpreis H<sub>2</sub>:
    </div>
    <div class="text-5xl">
      10,00 € / H<sub>2</sub>
    </div>
  </div>
{/if}
</div>
