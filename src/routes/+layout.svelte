<script>
	import './app.css';
	import 'animate.css';
	import 'iconify-icon';
	import '@lottiefiles/lottie-player';

	import { slides } from '$lib/stores';
	import Deck from '$lib/Deck.svelte';

	$slides = [
		{ route: '/', title: 'Introduction' },
		{ route: '/01-animations', title: 'Animations with Animate.CSS' },
		{ route: '/02-lottie', title: 'Lottie-Player' }
	];
</script>

<Deck>
	<slot />
</Deck>
