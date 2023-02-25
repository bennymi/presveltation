<script lang="ts">
	import { theme } from './stores';

	import type { SideMenu } from './types';
	import Sidebar from './Sidebar.svelte';

	export let sideMenus: SideMenu[];

	let showSidebar = false;

	const handleClick = () => {
		showSidebar = !showSidebar;
	};

	const closeSidebar = () => {
		setTimeout(() => {
			showSidebar = false;
		}, 500);
	};

	const themeSwitch = () => {
		if ($theme === 'dark') {
			$theme = 'light';
		} else {
			$theme = 'dark';
		}
	};

	$: darkTheme = $theme === 'dark';
</script>

{#if showSidebar}
	<div
		class="fixed top-12 left-0 right-0 bottom-0 z-[999] h-screen min-h-screen overflow-hidden bg-gray-800/80"
		on:click|self={handleClick}
		on:keydown
	>
		<aside class="overflow-y-auto">
			<Sidebar
				{sideMenus}
				on:change-page={closeSidebar}
				background="bg-gray-200 border-2 border-purple-500 dark:bg-purple-900 rounded-b-lg"
			/>
		</aside>
	</div>
{/if}

<div
	class="fixed inset-x-0 top-0 z-40 flex h-12 items-center justify-between bg-purple-900/90 px-4 shadow-sm shadow-gray-900 backdrop-blur-sm transition dark:bg-gray-900/30 dark:shadow-purple-600/70 md:h-14"
>
	<div
		class="flex items-center justify-center gap-2 text-lg font-semibold leading-relaxed text-gray-300 hover:text-gray-100"
	>
		<button class="flex justify-center md:hidden" on:click={handleClick} aria-pressed={showSidebar}>
			<span class="sr-only">open menu button to see available pages</span>
			<iconify-icon icon="material-symbols:menu-rounded" class="text-2xl" />
		</button>
		<a href="/" class="text-2xl font-bold text-white md:text-3xl">PreSveltation</a>
	</div>
	<div class="flex items-center justify-center gap-5">
		<button
			class="inline-flex text-gray-300 hover:text-gray-100"
			on:click={themeSwitch}
			aria-label="dark-theme"
			aria-pressed={darkTheme}
		>
			<span class="sr-only">Dark / Light mode toggle</span>
			{#if darkTheme}
				<iconify-icon icon="line-md:moon-rising-filled-loop" class="text-xl md:text-2xl" />
			{:else}
				<iconify-icon
					icon="line-md:moon-filled-to-sunny-filled-loop-transition"
					class="text-xl md:text-2xl"
				/>
			{/if}
		</button>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="/example/00-intro"
			class="flex items-center justify-center gap-1 text-lg font-semibold leading-relaxed text-gray-300 hover:text-gray-100"
		>
			<span class="sr-only">link to demo presentation</span>
			<iconify-icon icon="mdi:presentation-play" class="text-xl md:text-2xl" />
			<span class="hidden md:block"> Demo </span>
		</a>

		<a
			href="https://github.com/bennymi/presveltation"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center justify-center gap-1 text-lg font-semibold leading-relaxed text-gray-300 hover:text-gray-100"
		>
			<span class="sr-only">link to github repository</span>
			<iconify-icon icon="mdi:github" class="text-xl md:text-2xl" />
			<span class="hidden md:block">GitHub</span>
		</a>
	</div>
</div>
