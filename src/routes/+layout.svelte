<script>
	import './app.css';
	import 'animate.css';
	import 'iconify-icon';
	import '@lottiefiles/lottie-player';
	import hljs from 'highlight.js';
	// import 'highlight.js/styles/github-dark.css';
	import '$lib/CodeBlock/highlight-js.css';

	import { slides } from '$lib/stores';
	import { storeHighlightJs } from '$lib/CodeBlock/stores';
	import Deck from '$lib/Deck.svelte';

	$storeHighlightJs = hljs;

	$slides = [
		{ route: '/', title: 'Introduction' },
		{ route: '/example/01-animations', title: 'Animations with Animate.CSS' },
		{ route: '/example/02-lottie', title: 'Lottie-Player' },
		{ route: '/example/03-animate-tailwind', title: 'Tailwind Transitions' },
		{ route: '/example/04-code', title: 'Code Blocks' }
	];
</script>

<Deck>
	<slot />
</Deck>
