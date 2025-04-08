<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';


	let { children } = $props();

	function disableContextMenu(event: any) {
		event.preventDefault();
	}

onMount(() => {
	const preventZoom = (e: TouchEvent) => {
		if (e.touches.length > 1) {
			e.preventDefault();
		}
	};

	document.addEventListener('touchmove', preventZoom, {passive: false});
	return () => {
		document.removeEventListener('touchmove', preventZoom);
	};
});

</script>

<svelte:window on:contextmenu={disableContextMenu} />

{@render children()}
