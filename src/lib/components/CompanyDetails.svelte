<script lang="ts">
    export let content;
    export let activeItem: string;
</script>

<section class="w-full p-2 rounded-md mt-5">
    <h3 class="font-bold text-2xl ml-[168px] uppercase">{activeItem}</h3>
    <div class="text-3xl">
        {#if activeItem === "Beschreibung"}
        <div class="flex gap-10 overflow-y-auto">
            <img src="/description.png" class="size-32 brightness-200 " alt="description"/>
            {content.description}</div>
        {:else if activeItem === "Pro"}
        <div class="flex gap-10 overflow-y-auto h-32">
        <img src="/pros.png" class="size-32 brightness-150 " alt="pro"/>
            {content.pro}</div>
        {:else if activeItem === "Contra"}
        <div class="flex gap-10 overflow-y-auto">
        <img src="/cons.png" class="size-32 brightness-180 " alt="contra"/>
            {content.contra}</div>
        {:else if activeItem === "Zahlungsbereitschaft"}
            {content.pay}
        {:else if activeItem === "Förderbedarf"}
            {content.support}
        {:else if activeItem === "CO2-Einsparung"}
            {content.h2Saving}
        {/if}
    </div>
</section>

<style>
/* Breite der Scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}

/* Track (Hintergrund der Scrollbar) */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle (beweglicher Teil der Scrollbar) */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

/* Handle bei Hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>