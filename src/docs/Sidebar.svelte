<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';

	import type { SideMenu } from './types';

	const dispatcher = createEventDispatcher();

	export let sideMenus: SideMenu[];
	export let background: string =
		'backdrop-blur-sm dark:bg-gray-900/30 border-r-2 border-purple-600/50';

	const handleClick = () => {
		dispatcher('change-page');
	};
</script>

<nav
	class="h-full space-y-4 overflow-y-auto px-8 pt-6 pb-8 text-sm dark:border-purple-600/30 dark:text-gray-300 {background}"
>
	{#each sideMenus as sideMenu}
		<div class="space-y-4">
			<a
				href={sideMenu.route}
				on:click={handleClick}
				class="border-purple-700 pl-2 text-lg font-bold transition duration-300 {$page.url
					.pathname === sideMenu.route
					? 'border-l-2 border-purple-700 text-gray-800 dark:text-gray-200'
					: 'text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'}"
			>
				{sideMenu.name}
			</a>
			{#if $page.url.pathname === sideMenu.route}
				<div class="text-md flex flex-col space-y-2 pl-5" transition:slide={{ duration: 300 }}>
					{#each sideMenu.subMenus as subMenu}
						<a
							on:click={handleClick}
							class="text-gray-600 transition duration-300 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
							href={subMenu.route}>{subMenu.name}</a
						>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</nav>
