<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';

	import { slides } from '$lib/stores';

	const dispatch = createEventDispatcher();

	export let open: boolean = false;
	let modal: HTMLElement;
	let search: string = '';
	let currSlide: number = 0;
	let displayedSlide: number = 0;

	const close = () => dispatch('close');

	const handleUpdateSlide = (slideNumber: number) => {
		open = false;
		dispatch('update-slide', slideNumber);
	};

	const handleKeydown = (e: KeyboardEvent) => {
		const key = e.key;

		if (key === 'Escape') {
			close();
		} else if (key === 'Tab') {
			e.preventDefault();
			// trap focus
			const nodes = modal.querySelectorAll('*');
			const tabbable: Element[] = Array.from(nodes).filter((n) => (<HTMLElement>n).tabIndex >= 0);

			let index = tabbable.indexOf(document.activeElement!);
			if (index === -1 && e.shiftKey) index = 0;

			index += tabbable.length + (e.shiftKey ? -1 : 1);
			index %= tabbable.length;

			(<HTMLElement>tabbable[index]).focus();
		} else if (key === 'ArrowDown' && search === '' && displayedSlide < $slides.length - 1) {
			e.preventDefault();
			displayedSlide += 1;
			document.getElementById(`menu-slide-${displayedSlide}`)?.focus();
		} else if (key === 'ArrowUp' && search === '' && displayedSlide > 0) {
			e.preventDefault();
			displayedSlide -= 1;
			document.getElementById(`menu-slide-${displayedSlide}`)?.focus();
		}
	};

	onMount(() => {
		$slides.forEach((slide, i) => {
			if (slide.route === $page.route.id) {
				currSlide = i;
				displayedSlide = i;
			}
		});
	});

	$: slidesWithNumber = $slides.map((slide, i) => ({ ...slide, slideNumber: i }));
	$: slidesFiltered = slidesWithNumber.filter((s) =>
		s.title.toLowerCase().includes(search.toLowerCase())
	);
</script>

<svelte:window on:keydown={handleKeydown} />

{#if open}
	<div
		class="fixed top-0 left-0 bottom-0 z-50 h-full w-full bg-gray-800/95"
		on:click|self={close}
		bind:this={modal}
		on:keydown
	>
		<div class="flex h-full w-full items-center" on:click|self={() => (open = false)} on:keydown>
			<div class=" h-full w-1/3 bg-gray-800 shadow-lg shadow-gray-900">
				<div class="flex items-center justify-evenly bg-gray-900 px-1 py-4 text-white">
					<div class="text-xl font-bold">Table of Contents</div>
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
						<!-- ICON: ion:md-close-circle-outline -->
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6" viewBox="0 0 512 512"
							><path
								d="M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422s-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256s17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"
								fill="currentColor"
							/><path
								d="M360 330.9L330.9 360 256 285.1 181.1 360 152 330.9l74.9-74.9-74.9-74.9 29.1-29.1 74.9 74.9 74.9-74.9 29.1 29.1-74.9 74.9z"
								fill="currentColor"
							/></svg
						>
					</button>
				</div>

				<div class="flex h-full flex-col gap-2 overflow-auto border-2 border-gray-800 p-4">
					{#each slidesFiltered as { route, title, slideNumber }}
						<button
							id="menu-slide-{slideNumber}"
							on:click={() => handleUpdateSlide(slideNumber)}
							on:mouseenter={() => (displayedSlide = slideNumber)}
							class="rounded-lg border-2 border-gray-900 px-2 py-1 text-left text-white hover:bg-gray-900 hover:font-bold hover:shadow-md hover:shadow-blue-500 {slideNumber ===
							displayedSlide
								? 'bg-gray-900 font-bold'
								: ''}"
						>
							{slideNumber + 1}: {title}
						</button>
					{/each}
				</div>
			</div>

			<iframe
				class="h-3/4 w-3/4 scale-75 rounded-lg border-2 border-gray-900 bg-white shadow-lg shadow-gray-900"
				src={$slides[displayedSlide].route}
				title={$slides[displayedSlide].title}
				frameborder="0"
				tabindex="-1"
			/>
		</div>
	</div>
{/if}
