<script lang="ts">
	import Modal from './Modal.svelte';
	import { slides } from '$lib/stores';

	export let open: boolean = false;
	let search: string = '';

	$: slidesFiltered = $slides.filter((s) => s.title.toLowerCase().includes(search.toLowerCase()));
</script>

{#if open}
	<Modal on:close>
		<div
			class="absolute left-1/2 top-1/2 z-50 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-800 shadow-lg shadow-gray-900"
		>
			<div class="flex items-center justify-evenly rounded-t-lg bg-gray-900 px-1 py-4 text-white">
				<div class="text-2xl font-bold">Table of Contents</div>
				<input
					type="text"
					bind:value={search}
					class="w-1/2 rounded-lg border-2 border-blue-700 bg-gray-900 px-2 py-1"
					placeholder="Search"
				/>
				<button class="flex items-center justify-center" on:click={() => (open = false)}>
					<iconify-icon icon="ion:md-close-circle-outline" class="text-2xl" />
				</button>
			</div>

			<div class="flex flex-col gap-2 overflow-auto rounded-b-lg border-2 border-gray-800 p-4">
				{#each slidesFiltered as { route, title }, i}
					<div
						class="cursor-pointer rounded-lg border-2 border-gray-900 px-2 py-1 text-white hover:bg-gray-900 hover:font-bold hover:shadow-md hover:shadow-blue-500"
					>
						{i + 1}: {title}
					</div>
				{/each}
			</div>
		</div>
	</Modal>
{/if}
