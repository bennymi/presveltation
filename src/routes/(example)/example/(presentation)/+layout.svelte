<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	import 'animate.css';
	import 'iconify-icon';

	import { slides } from '$lib/stores';
	import Deck from '$lib/Deck.svelte';

	$slides = [
		{ route: '/example/00-intro', title: 'Introduction', notes: true },
		{ route: '/example/01-animations', title: 'Animations with Animate.CSS' },
		{ route: '/example/02-lottie', title: 'Lottie-Player' },
		{ route: '/example/03-animate-tailwind', title: 'Tailwind Transitions' },
		{ route: '/example/04-code', title: 'Code Blocks' },
		{ route: '/example/05-math', title: 'Math' },
		{ route: '/example/final', title: 'Final Slide' }
	];

	onMount(async () => {
		if (browser) {
			await import('@lottiefiles/lottie-player');
		}
	});
</script>

<Deck notesURL="/example/notes">
	<slot />
</Deck>
