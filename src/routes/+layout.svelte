<script>
	import './app.css';
	import 'animate.css';
	import 'iconify-icon';
	import '@lottiefiles/lottie-player';

	import { slides } from '$lib/stores';
	import Deck from '$lib/Deck.svelte';

	$slides = [
		{ route: '/', title: 'Introduction' },
		{ route: '/example/01-animations', title: 'Animations with Animate.CSS' },
		{ route: '/example/02-lottie', title: 'Lottie-Player' },
		{ route: '/example/03-animate-tailwind', title: 'Tailwind Transitions' }
	];
</script>

<Deck>
	<slot />
</Deck>
