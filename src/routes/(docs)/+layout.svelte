<script lang="ts">
	import { page } from '$app/stores';

	import './docs.css';
	import 'highlight.js/styles/base16/dracula.css';

	import Navbar from '../../docs/Navbar.svelte';
	import Sidebar from '../../docs/Sidebar.svelte';
	import BottomNav from '../../docs/BottomNav.svelte';
	import { theme } from '../../docs/stores';
	import type { SideMenu } from '../../docs/types';

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
		},
		{
			name: 'Math',
			route: '/math',
			subMenus: [
				{ name: 'Katex', route: '/math#katex' },
				{ name: 'Example', route: '/math#math-example' }
			]
		}
	];

	$: currentPageIdx = sideMenus.findIndex((v) => v.route === $page.url.pathname);
	$: previousPage = currentPageIdx === 0 ? null : sideMenus[currentPageIdx - 1];
	$: nextPage = currentPageIdx === sideMenus.length - 1 ? null : sideMenus[currentPageIdx + 1];
</script>

<div class:dark={$theme === 'dark'}>
	<div class="h-full min-h-screen dark:bg-gradient-to-tr dark:from-[#10032c] dark:to-purple-900">
		<Navbar />

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
</div>
