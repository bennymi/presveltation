<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	import Modal from './Modal.svelte';
	import { slides } from '$lib/stores';

	const dispatch = createEventDispatcher();

	export let open: boolean = false;
	let search: string = '';
	let currSlide: number = 0;
	let hoveredSlide: number = 0;

	const handleUpdateSlide = (filteredIdx: number) => {
		$slides.forEach((slide, i) => {
			if (slide.route === slidesFiltered[filteredIdx].route) {
				open = false;
				dispatch('update-slide', i);
			}
		});
	};

	onMount(() => {
		$slides.forEach((slide, i) => {
			if (slide.route === $page.route.id) {
				currSlide = i;
				hoveredSlide = i;
			}
		});
	});

	$: slidesWithNumber = $slides.map((slide, i) => ({ ...slide, slideNumber: i }));
	$: slidesFiltered = slidesWithNumber.filter((s) =>
		s.title.toLowerCase().includes(search.toLowerCase())
	);
</script>

{#if open}
	<Modal on:close>
		<div
			class="absolute z-50 flex h-full w-full items-center justify-center"
			on:click|self={() => (open = false)}
			on:keydown
		>
			<div class=" h-full w-1/3 bg-gray-800 shadow-lg shadow-gray-900">
				<div class="flex items-center justify-evenly bg-gray-900 px-1 py-4 text-white">
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

				<div class="flex h-full flex-col gap-2 overflow-auto border-2 border-gray-800 p-4">
					{#each slidesFiltered as { route, title, slideNumber }, i}
						<button
							on:click={() => handleUpdateSlide(i)}
							on:mouseenter={() => (hoveredSlide = i)}
							class="rounded-lg border-2 border-gray-900 px-2 py-1 text-left text-white hover:bg-gray-900 hover:font-bold hover:shadow-md hover:shadow-blue-500"
						>
							{slideNumber + 1}: {title}
						</button>
					{/each}
				</div>
			</div>

			<iframe
				class="h-3/4 w-3/4 scale-50 rounded-lg border-2 border-gray-900 bg-white shadow-lg shadow-gray-900"
				src={slidesFiltered[hoveredSlide].route}
				title={slidesFiltered[hoveredSlide].title}
				frameborder="0"
			/>
		</div>
	</Modal>
{/if}
