<script lang="ts">
  import { totalH2State, resetH2, h2Count } from "../state.svelte.ts";
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  const dispatch = createEventDispatcher();

  const { maxH2 = 10, nick } = $props();

  type H2CountKey = 'metal' | 'maritim' | 'hanse' | 'bio' | 'hospital' | 'bakery';

  let h2Counter: number = $state(0);



  $effect(() => {
    if(resetH2.state === true) {
    h2Counter = 0;
    }
    });


  const increment = (event: any, nick: H2CountKey) => {
    event.preventDefault();
    if (h2Counter < maxH2 && totalH2State.availableH2 > 0) {
      h2Counter++;
      h2Count[nick]++;
      resetH2.state = false;
      totalH2State.availableH2--;
      dispatchPercentage();
    } else {
      return;
    }
  };

  const decrement = (event: any, nick: H2CountKey) => {
    event.preventDefault();
    if (h2Counter > 0) {
      h2Counter--;
      h2Count[nick]--;
      resetH2.state = false;
      totalH2State.availableH2++;
      dispatchPercentage();
    } else {
      return;
    }
  };

  const percentage = () => {
    return h2Counter > 0 ? ((h2Counter / maxH2) * 100).toFixed(0) : 0;
  };

  const dispatchPercentage = () => {
    const percentValue = percentage();
    dispatch("updatePercentage", percentValue);
  };
</script>

<div class="flex justify-between items-center mx-auto mb-3" >
  <div class="flex items-center gap-8 h-32 justify-between rounded-full  bg-cyan-50/10 border-3 border-cyan-100 p-3">
    <button
      ontouchend={(event) => decrement(event, nick)}
      onclick={(event) => decrement(event, nick)}
	  class="text-2xl font-bold bg-yellow-400 active:bg-yellow-200 transition"
      class:disabled={totalH2State.availableH2 === 30 || h2Counter === 0}
      >
      <img src="/minus.png" class="size-12" alt="minus" />
      </button
    >

    <div class="flex flex-col items-center gap-1">

		<div class="flex items-center gap-3 text-3xl font-bold text-cyan-100 mb-2">
			<div class="">H<sub>2</sub> Bedarf:</div>
      <div >
		{h2Counter} / {maxH2}
	</div></div>


      <div class="relative">
        <div class="flex items-center gap-1">
          {#each Array.from({ length: maxH2 }, (_, i) => i)}
            <div class="bg-cyan-200/20 w-8 h-10 rounded-sm"></div>
          {/each}
        </div>
        <div class="absolute top-0 flex items-center gap-1">
          {#each Array.from({ length: h2Counter }, (_, i) => i)}
            <div class="bg-gradient-to-t from-sky-300 to-cyan-200 w-8 h-10 rounded-sm"></div>
          {/each}
        </div>
      </div>
    </div>

    <button
      ontouchend={(event) => increment(event, nick)}
      onclick={(event) => increment(event, nick)}
	   class="text-2xl font-bold bg-yellow-400 active:bg-yellow-200  transition"
      class:disabled={totalH2State.availableH2 === 0 || h2Counter === maxH2}
      >
        <img src="/plus.png" class="size-8" alt="plus" />
      </button
    >
  </div>
</div>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.5em;
    width: 2.5em;
    padding: 0.2em;
    border-radius: 10em;
    cursor: pointer;
  }

  .disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }

</style>
