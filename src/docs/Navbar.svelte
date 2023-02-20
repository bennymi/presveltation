<script lang="ts">
	import { theme } from './stores';

	const themeSwitch = () => {
		if ($theme === 'dark') {
			$theme = 'light';
		} else {
			$theme = 'dark';
		}
	};

	$: darkTheme = $theme === 'dark';
</script>

<div
	class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-purple-900/90 px-4 shadow-sm shadow-gray-900 backdrop-blur-sm transition dark:bg-gray-900/30 dark:shadow-purple-600/70 sm:px-6 lg:z-30 lg:px-8"
>
	<a href="/" class="text-3xl font-bold text-white">SvelteShow</a>
	<div class="flex items-center justify-center gap-5">
		<a
			target="_blank"
			rel="noopener noreferrer"
			href="/example/00-intro"
			class="text-xl font-bold text-gray-300 hover:text-gray-100">Demo</a
		>
		<button class="inline-flex text-gray-300 hover:text-gray-100" on:click={themeSwitch}>
			<span class="sr-only">Dark / Light mode toggle</span>
			{#if darkTheme}
				<iconify-icon icon="line-md:moon-rising-filled-loop" class="text-2xl" />
			{:else}
				<iconify-icon icon="line-md:moon-filled-to-sunny-filled-loop-transition" class="text-2xl" />
			{/if}
		</button>
		<a
			href="https://github.com/bennymi/svelte-show"
			target="_blank"
			rel="noopener noreferrer"
			class="flex items-center justify-center gap-1 text-lg font-semibold leading-relaxed text-gray-300 hover:text-gray-100"
		>
			<iconify-icon icon="mdi:github" class="text-3xl" />
			GitHub
		</a>
	</div>
</div>
