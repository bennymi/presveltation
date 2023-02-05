<script lang="ts">
	import Modal from './Modal.svelte';
	import { slides } from '$lib/stores';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	export let open: boolean = false;
	let search: string = '';
	let currSlide: number = 0;
	let hoveredSlide: number = 0;

	onMount(() => {
		$slides.forEach((slide, i) => {
			if (slide.route === $page.route.id) {
				currSlide = i;
				hoveredSlide = i;
			}
		});
	});

	$: slidesFiltered = $slides.filter((s) => s.title.toLowerCase().includes(search.toLowerCase()));
</script>

{#if open}
	<Modal on:close>
		<div
			class="absolute left-1/4 top-1/2 z-50 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-800 shadow-lg shadow-gray-900"
		>
			<div class="flex items-center justify-evenly rounded-t-lg bg-gray-900 px-1 py-4 text-white">
				<div class="text-2xl font-bold">Table of Contents</div>
				<input
					type="text"
					bind:value={search}
					class="w-1/2 rounded-lg border-2 border-blue-700 bg-gray-900 px-2 py-1"
					placeholder="Search"
				/>
				<button
					class="flex items-center justify-center text-gray-400 hover:text-gray-50"
					on:click={() => (open = false)}
				>
					<iconify-icon icon="ion:md-close-circle-outline" class="text-2xl" />
				</button>
			</div>

			<div class="flex flex-col gap-2 overflow-auto rounded-b-lg border-2 border-gray-800 p-4">
				{#each slidesFiltered as { route, title }, i}
					<a
						href={route}
						on:click={() => {
							open = false;
						}}
						on:mouseenter={() => (hoveredSlide = i)}
						class="rounded-lg border-2 border-gray-900 px-2 py-1 text-white hover:bg-gray-900 hover:font-bold hover:shadow-md hover:shadow-blue-500"
					>
						{i + 1}: {title}
					</a>
				{/each}
			</div>
		</div>

		<iframe
			class="absolute left-3/4 top-1/2 z-50 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 scale-50 rounded-lg border-2 border-gray-900 bg-white shadow-lg shadow-gray-900"
			src={slidesFiltered[hoveredSlide].route}
			title={slidesFiltered[hoveredSlide].title}
			frameborder="0"
		/>
	</Modal>
{/if}
