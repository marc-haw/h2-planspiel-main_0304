<script lang="ts">
  import H2ControlA from "$lib/components/H2ControlA.svelte";
  import H2Control from "$lib/components/H2Control.svelte";
  import GradientBar from "$lib/components/GradientBar.svelte";
  import CompanyNav from "$lib/components/CompanyNav.svelte";
  import CompanyDetails from "$lib/components/CompanyDetails.svelte";
  import TabNav from "$lib/components/TabNav.svelte";
  import EuroCoin from "./EuroCoin.svelte";

  let { company, activePhase } = $props();

  let h2Amount: number = company.h2;
  let currentH2: number = 3;
  // let navItems = ['Beschreibung', 'Pro', 'Contra', 'Zahlungsbereitschaft', 'Förderbedarf', 'CO2-Einsparung']
  let navItems = ["Beschreibung", "Pro", "Contra"];

  let percentage = $state(0);
  let activeItem = $state("Beschreibung");
  let infoActive = $state(false);
  let activeTab = $state('info')

  const handleUpdatePercentage = (event) => {
    percentage = event.detail;
  };
</script>

<section
  class="glass relative flex flex-col justify-between items-center gap-3 p-3 backdrop-blur-sm w-full h-full rounded-lg"
>
  <div class="flex items-center justify-center gap-6 w-full text-slate-200">
    <img src="/{company.img}" class="size-52" alt={company.img} />
    <div class="flex flex-col items-start">
      <h2 class="font-bold text-6xl">{company.name}</h2>
      <h3 class="font-light text-3xl">{company.type}</h3>
    </div>
  </div>

  {#if activePhase === "a"}
<H2ControlA />
   {:else} 
   <H2Control
   maxH2={company.h2}
   nick={company.nick}
   on:updatePercentage={handleUpdatePercentage}
 />
  {/if}

  <div class="flex flex-col w-full">

      <TabNav bind:activeTab {activePhase}/>
  
    <div class="flex flex-col p-3 gap-3 w-full bg-gray-100/25 h-68 rounded-lg">
      {#if activePhase === "a" || activePhase === "b" || activeTab === "infos"}
        <CompanyNav {navItems} bind:activeItem />
        <CompanyDetails content={company} {activeItem} />
   
      {:else if activePhase === "c" || activeTab === 'co2'}
      <div class="flex justify-between items-center px-10">
        <div class="flex flex-col w-full text-2xl font-bold text-center">
          <div>Potentielle CO<sub>2</sub>-Einsparung:</div>
          <div class="font-extrabold text-4xl mt-5 mb-4">
            {company.h2Saving}
          </div>
          <GradientBar {percentage} id={company.id} />
        </div>
      </div>
      <div class="text-xl font-bold">
        Referenz CO<sub>2</sub> Einsparung: ????
      </div>
        
      {:else if activePhase === "d" || activeTab === 'foerder'}
<div class="flex justify-center gap-20 my-auto">

        <div class="flex flex-col text-center gap-4 font-bold">
          <div class="text-3xl">Zahlungsbereitschaft: </div>
          <div class="text-5xl">{company.pay.toFixed(2).replace('.', ',')} € / H<sub>2</sub></div>
            <div class="flex mx-auto">  
              {#each Array.from({ length: company.pay }, (_, i) => i)}
          <EuroCoin classes="size-16 not-first:-ml-6"/>
          {/each} {#if company.id === 4}
          <img src="halfeuro.png" class="h-11 -ml-5 mt-[10px]" alt="euro" />
          {/if}</div>
        </div>
        <div class="flex flex-col text-center gap-4 font-bold">
          <span class="text-3xl">Förderbedarf:</span> 
          {#if company.support === 0}
          <span class="text-5xl">Keinen</span>
          {:else}
          <span class="text-5xl">{company.support.toFixed(2).replace('.', ',')} € / H<sub>2</sub></span>
          <div class="flex mx-auto"> 
          {#each Array.from({ length: company.support }, (_, i) => i)}
          <EuroCoin classes="size-16 not-first:-ml-6 "/>
          {/each}
        {#if company.id === 4}
      <img src="halfeuro.png" class="h-10 mt-2" alt="euro" />
      {/if}
      </div>
          {/if}
        </div>
      </div>
      {/if}
      <!-- <ul>
          {#each Array.from({ length: h2Amount }) as _, rank}
          <li class="size-3 rounded-full bg-cyan-400"></li>
        {/each}
        </ul>{h2Amount} -->
    </div>
  </div>
</section>

<style>
  .glass {
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 10px 4px 10px rgba(8, 0, 121, 0.5);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
</style>
