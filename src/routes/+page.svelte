<script lang="ts">
import companies from '$lib/companies.json' with { type: "json" };
import CompanyCard from '$lib/components/CompanyCard.svelte';
import TotalH2 from '$lib/components/TotalH2.svelte';
import AdminNav from '$lib/components/AdminNav.svelte';
import Header from '$lib/components/Header.svelte';
import SupportBar from '$lib/components/SupportBar.svelte';

 let activePhase = $state('d')


</script>

<section class="color-bg flex flex-col justify-center gap-24 h-screen pt-2 pb-12 px-6 ">

  <Header bind:activePhase />



<section class="flex h-full">
  {#if activePhase === 'd'}
<SupportBar {companies}/>
{/if}

<section class="grid grid-cols-3 gap-12 h-10/12 w-10/12 mx-auto">
    {#each companies as company (company.id)}
    <CompanyCard {company} {activePhase} />
    {/each}
</section>
</section> 
</section>

<style>
  .color-bg {
    background-image: url('/background.png');
    background-repeat: none;
    background-size: cover;
  }
</style>