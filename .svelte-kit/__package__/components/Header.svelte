<script lang="ts">
    import TotalH2 from "./TotalH2.svelte";
    import AdminNav from "./AdminNav.svelte";


export let activePhase;


</script>

<header class="flex justify-center items-center w-full">
    <AdminNav bind:activePhase/>
    <TotalH2 bind:activePhase/>
</header>