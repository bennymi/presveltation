<script lang="ts">
	import { onMount } from 'svelte';

	export let src: string = '';
	export let title: string = '';

	// onMount(() => {
	// 	console.log('in Speaker View');
	// 	console.log(src);
	// 	console.log(title);
	// });
</script>

<h1>This is the component to be attached</h1>

<!-- <iframe {src} class="h-screen w-screen overflow-auto" title={`Notes: ${title}`} frameborder="0" /> -->
