<script lang="ts">



let { activePhase, activeTab = $bindable() } = $props();

const setActiveTab = (tabItem: string) => {
    activeTab = tabItem;
}

$effect(() =>{

    if(activePhase === 'a' || activePhase === 'b') {
        activeTab = 'infos'
    } else if(activePhase === 'c') {
        activeTab = 'co2'
    } else if(activePhase === 'd') {
        activeTab = 'foerder'
    }

});

</script>

<nav class="flex gap-2 ml-2 text-xl">
    <button onclick={() => setActiveTab('infos')} class="p-2  rounded-t-lg cursor-pointer active:bg-gray-100 transition font-bold
        { activeTab === 'infos' ? 'bg-slate-100/80 text-cyan-600/80  ' : 'bg-slate-200/50 text-slate-500'}">
        Infos
    </button>

    {#if activePhase !== "a" && activePhase !== "b"}
    <button onclick={() => setActiveTab('co2')} class="p-2  rounded-t-lg cursor-pointer active:bg-gray-100 transition font-bold
        { activeTab === 'co2' ? 'bg-slate-100/80 text-cyan-600/80   ' : 'bg-slate-200/50 text-slate-500'}">
        CO<sub>2</sub>
    </button>
    {/if}
    {#if activePhase !== "a" && activePhase !== "b" && activePhase !== "c"}
    <button onclick={() => setActiveTab('foerder')} class="p-2  rounded-t-lg cursor-pointer active:bg-gray-100 transition font-bold
        { activeTab === 'foerder' ? 'bg-slate-100/80 text-cyan-600/80  ' : 'bg-slate-200/50 text-slate-500'}">
       Förderbedarf
    </button>
    {/if}
</nav>