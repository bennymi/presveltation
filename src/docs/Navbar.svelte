<script lang="ts">
	import { browser } from '$app/environment';

	let darkTheme: boolean = false;

	const themeSwitch = () => {
		if (browser) {
			if (darkTheme) {
				document.documentElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
				darkTheme = false;
			} else {
				document.documentElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
				darkTheme = true;
			}
		}
	};

	$: if (browser) {
		darkTheme = document.documentElement.classList.contains('dark');
		console.log(document.documentElement.classList);
		console.log(document);
	}
</script>

<div
	class="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 bg-white/80 px-4 backdrop-blur-sm transition dark:bg-gray-900/30 sm:px-6 lg:z-30 lg:px-8"
>
	<a href="/" class="text-2xl font-bold text-white">SvelteShow</a>
	<div class="flex items-center justify-center gap-4">
		<form method="post" class="inline-flex">
			<button formaction="/?/setTheme&theme={darkTheme ? 'light' : 'dark'}" class="inline-flex">
				<span class="sr-only">Dark / Light mode toggle</span>
				{#if darkTheme}
					<iconify-icon icon="line-md:moon-rising-filled-loop" class="text-2xl text-white" />
				{:else}
					<iconify-icon
						icon="line-md:moon-filled-to-sunny-filled-loop-transition"
						class="text-2xl text-white"
					/>
				{/if}
			</button>
		</form>
		<a
			href="https://github.com/bennymi/svelte-presentation"
			class="flex items-center justify-center gap-1 text-lg font-semibold leading-relaxed text-gray-700 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100"
		>
			<iconify-icon icon="mdi:github" class="text-3xl" />
			<!-- GitHub -->
		</a>
	</div>
</div>
