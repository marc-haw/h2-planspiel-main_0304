<script lang="ts">

  import { resetH2 } from "../state.svelte.js";

  let phases = ["a", "b", "c", "d"];
  
  export let activePhase: string ='a';

  const handleClickPhase = (phase: string) => {
    if (activePhase === 'a' || phase === 'a') {
      resetH2.state = true;
    }
    activePhase = phase;
  };
</script>

<nav class="absolute top-2 left-2 flex gap-2 items-center">
  {#each phases as phase, i}
    <button on:click={() => handleClickPhase(phase)}
    class="flex items-center justify-center size-6 text-xs text-slate-500 border font-light p-2 rounded-full  cursor-pointer {activePhase === phase ? 'border-slate-500 bg-yellow-200': 'bg-slate-200'}">{phase}</button>
  {/each}
</nav>
