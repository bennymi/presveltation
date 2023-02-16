<script lang="ts">
	import { page } from '$app/stores';

	import './docs.css';
	import 'highlight.js/styles/base16/dracula.css';

	import Navbar from '../../docs/Navbar.svelte';
	import Sidebar from '../../docs/Sidebar.svelte';
	import BottomNav from '../../docs/BottomNav.svelte';
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
			name: 'Stores',
			route: '/stores',
			subMenus: [
				{ name: 'Slides', route: '/stores/#slides' },
				{ name: 'Current Slide', route: '/stores/#curr-slide' },
				{ name: 'Max Steps', route: '/stores/#max-steps' },
				{ name: 'Current Step', route: '/stores/#curr-step' }
			]
		}
	];

	$: currentPageIdx = sideMenus.findIndex((v) => v.route === $page.url.pathname);
	$: previousPage = currentPageIdx === 0 ? null : sideMenus[currentPageIdx - 1];
	$: nextPage = currentPageIdx === sideMenus.length - 1 ? null : sideMenus[currentPageIdx + 1];
</script>

<div class="h-full min-h-screen dark:bg-gradient-to-tr dark:from-[#10032c] dark:to-purple-900">
	<Navbar />
	<div class="flex">
		<aside class="sticky top-14 h-screen overflow-y-auto">
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
