<script lang="ts">
    export let navItems;
    export let activeItem: any;

    const handleNavItem = (item: any) => {
        activeItem = item;
    };
</script>

<nav class="flex justify-center gap-2 w-full">
    {#each navItems as item, i}
        <button
            on:click={() => handleNavItem(item)}
            class="flex items-center text-lg font-bold justify-center rounded-md py-2 px-4  text-center  cursor-pointer active:bg-slate-200/90 transition border-3 {activeItem ===
            item
                ? 'border-cyan-200 bg-cyan-300/20 text-cyan-100'
                : 'bg-slate-100/55 border-cyan-100/0 text-slate-600'}"
        >
            {item}
        </button>
    {/each}
</nav>
