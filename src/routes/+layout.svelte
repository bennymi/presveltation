<script>
	import { page } from '$app/stores';

	import './app.css';
	import 'iconify-icon';

	const meta = {
		title: 'SvelteShow: Create Presentations and Slideshows with Svelte & Tailwind',
		description:
			'Create interactive and dynamic presentations and slideshows with Svelte / SvelteKit and Tailwind CSS.'
	};
</script>

<svelte:head>
	<title>SvelteShow: Create Presentations and Slideshows with Svelte & Tailwind</title>
	<!-- Meta Tags -->
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta
		name="keywords"
		content="svelte, sveltekit, presenter, presentation, slideshow, tailwind, slides, powerpoint, typescript, css, revealjs, reveal js, open source"
	/>
	<meta name="author" content="Benedikt Mielke" />
	<!-- Open Graph - https://ogp.me/ -->
	<meta property="og:site_name" content="SvelteShow" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://svelte-show.vercel.app{$page.url.pathname}" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
</svelte:head>

<slot />
