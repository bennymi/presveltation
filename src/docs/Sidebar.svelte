<script lang="ts">
	import { page } from '$app/stores';

	type SubMenu = {
		name: string;
		route: string;
	};

	type SideMenu = {
		name: string;
		route: string;
		subMenus: SubMenu[];
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

	$: console.log($page);
</script>

<nav
	class="h-full space-y-8 overflow-y-auto border-r-2 border-purple-600/30 bg-white/80 px-8 pt-6 text-sm backdrop-blur-sm transition dark:bg-gray-900/30 dark:text-gray-300"
>
	{#each sideMenus as sideMenu}
		<div class="space-y-4">
			<a
				href={sideMenu.route}
				class="pl-1 text-lg font-bold {$page.url.pathname === sideMenu.route
					? 'border-l-2 border-purple-700'
					: ''}"
			>
				{sideMenu.name}
			</a>
			<div class="text-md flex flex-col space-y-2 pl-5">
				{#each sideMenu.subMenus as subMenu}
					<a href={subMenu.route}>{subMenu.name}</a>
				{/each}
			</div>
		</div>
	{/each}
</nav>
