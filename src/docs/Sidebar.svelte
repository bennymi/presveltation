<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';

	import type { SideMenu } from './types';

	export let sideMenus: SideMenu[];
</script>

<nav
	class="h-full space-y-4 overflow-y-auto border-r-2 border-purple-600/30 bg-white/80 px-8 pt-6 pb-8 text-sm backdrop-blur-sm dark:bg-gray-900/30 dark:text-gray-300"
>
	{#each sideMenus as sideMenu}
		<div class="space-y-4">
			<a
				href={sideMenu.route}
				class="border-purple-700 pl-2 text-lg font-bold transition duration-300 {$page.url
					.pathname === sideMenu.route
					? 'border-l-2 border-purple-700 text-gray-200'
					: 'text-gray-400 hover:text-gray-200'}"
			>
				{sideMenu.name}
			</a>
			{#if $page.url.pathname === sideMenu.route}
				<div class="text-md flex flex-col space-y-2 pl-5" transition:slide={{ duration: 300 }}>
					{#each sideMenu.subMenus as subMenu}
						<a class="text-gray-400 hover:text-gray-200" href={subMenu.route}>{subMenu.name}</a>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</nav>
