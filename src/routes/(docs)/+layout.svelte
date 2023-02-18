<script lang="ts">
	import { page } from '$app/stores';

	import './docs.css';
	import 'highlight.js/styles/base16/dracula.css';

	import Navbar from '../../docs/Navbar.svelte';
	import Sidebar from '../../docs/Sidebar.svelte';
	import BottomNav from '../../docs/BottomNav.svelte';
	import type { SideMenu } from '../../docs/types';

	const meta = {
		title: 'SvelteShow: Create Presentations and Slideshows with Svelte & Tailwind',
		description:
			'Create interactive and dynamic presentations and slideshows with Svelte / SvelteKit and Tailwind CSS.'
	};

	let sideMenus: SideMenu[] = [
		{
			name: 'Getting Started',
			route: '/',
			subMenus: [
				{ name: 'Project Structure', route: '/#project-structure' },
				{ name: 'Slides Folder', route: '/#slides-folder' },
				{ name: 'Notes Folder', route: '/#notes-folder' }
			]
		},
		{
			name: 'Slide Step Classes',
			route: '/slide-steps',
			subMenus: [
				{ name: 'Add Step Animations', route: '/slide-steps#add-step-animation' },
				{ name: 'Animate.css', route: '/slide-steps#animate-css' },
				{ name: 'Adding Tailwind Classes', route: '/slide-steps#tailwind-css' }
			]
		},
		{
			name: 'Stores',
			route: '/stores',
			subMenus: [
				{ name: 'Slides', route: '/stores#slides' },
				{ name: 'Current Slide', route: '/stores#curr-slide' },
				{ name: 'Max Steps', route: '/stores#max-steps' },
				{ name: 'Current Step', route: '/stores#curr-step' }
			]
		},
		{
			name: 'Dynamic Code',
			route: '/code',
			subMenus: [
				{ name: 'SvHighlight', route: '/code#svhighlight' },
				{ name: 'Add Step Focus Blocks', route: '/code#focus-blocks' }
			]
		}
	];

	$: currentPageIdx = sideMenus.findIndex((v) => v.route === $page.url.pathname);
	$: previousPage = currentPageIdx === 0 ? null : sideMenus[currentPageIdx - 1];
	$: nextPage = currentPageIdx === sideMenus.length - 1 ? null : sideMenus[currentPageIdx + 1];
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

<div class="h-full min-h-screen dark:bg-gradient-to-tr dark:from-[#10032c] dark:to-purple-900">
	<Navbar />
	<!-- <div class="flex h-full min-h-screen"> -->
	<!-- <aside class="sticky top-14 h-full overflow-y-auto"> -->
	<div class="flex h-full min-h-screen">
		<aside class="sticky top-14 h-[calc(100vh-3.5em)] overflow-y-auto">
			<Sidebar {sideMenus} />
		</aside>
		<div class="mx-auto w-3/6 max-w-3xl pt-20 pb-56">
			<slot />
			<div class="mt-12 w-full">
				<BottomNav previous={previousPage} next={nextPage} />
			</div>
		</div>
	</div>
</div>
