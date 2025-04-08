<script lang="ts">
    import { h2Count } from "../state.svelte.js";

let { companies } = $props();
 let h2CountSum = $state(0)
 let percantage = $state(0);
 let translateY = $state(0);
 let supportMetal = 0;
 let supportMaritim = 0;
 let supportHanse = 0;
 let supportBio = 0;
 let supportHospital = 0;
 let supportBakery = 0;

$effect(() => {
supportMetal = h2Count.metal * companies[0].support;
supportMaritim = h2Count.maritim * companies[1].support;
supportHanse = h2Count.hanse * companies[2].support;
supportBio = h2Count.bio * companies[3].support;
supportHospital = h2Count.hospital * companies[4].support;
supportBakery = h2Count.bakery * companies[5].support;
h2CountSum = supportMetal + supportMaritim + supportHanse + supportBio + supportHospital + supportBakery;
percantage = (h2CountSum / 107) * 100;
translateY = 100 - percantage;}
)

</script>

<section class="flex h-full w-auto gap-2">

    <div class="flex flex-col items-center h-full">
        <span class="text-xl font-bold text-slate-200 mb-2">{h2CountSum} €</span>

    <div class="relative h-full w-24 rounded-3xl bg-slate-200/40 z-20 border border-slate-300/40 overflow-clip">
        <div class="absolute transition top-0 h-full rounded-2xl z-10 w-full bg-yellow-200" style="transform: translateY({translateY}%)"></div>
    </div>
</div>
    <div class="relative h-full text-slate-200 font-bold text-2xl">
        <div class="absolute bottom-[80%]">
            Brücke (Rep)
        </div>
        <div class="absolute bottom-[60%]">
           Sporthalle
        </div>
        <div class="absolute bottom-[40%]">
            Teilsanierung Schule
        </div>
        <div class="absolute bottom-[20%]">
            Spielplatz
        </div>

    </div>
</section>