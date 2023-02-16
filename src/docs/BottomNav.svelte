<script lang="ts">
	import type { SideMenu } from './types';

	export let previous: SideMenu | null = null;
	export let next: SideMenu | null = null;
</script>

<div class="flex w-full">
	{#if previous}
		<div class="flex flex-col items-start gap-3">
			<a
				href={previous.route}
				class="inline-flex items-center justify-center gap-0.5 rounded-full bg-purple-500/30 px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-gray-400 backdrop-blur-sm transition hover:bg-purple-500/40 hover:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
				><iconify-icon icon="material-symbols:arrow-back-rounded" class="text-md" /> Previous</a
			>
			<a
				href={previous.route}
				class="text-base font-bold text-gray-900 transition hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
				>{previous.name}</a
			>
		</div>
	{/if}

	{#if next}
		<div class="ml-auto flex flex-col items-end gap-3">
			<a
				href={next.route}
				class="inline-flex items-center justify-center gap-0.5 rounded-full bg-purple-500/30 px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-gray-400 backdrop-blur-sm transition hover:bg-purple-500/40 hover:ring-gray-200 dark:text-gray-400 dark:hover:text-gray-200"
				>Next <iconify-icon icon="material-symbols:arrow-forward-rounded" class="text-md" /></a
			>
			<a
				href={next.route}
				class="text-base font-bold text-gray-900 transition hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400"
				>{next.name}</a
			>
		</div>
	{/if}
</div>
