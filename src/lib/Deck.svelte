<script lang="ts">
	import { goto } from '$app/navigation';
	import { currStep, maxSteps, slides } from '$lib/stores';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import Overview from './menu/Overview.svelte';

	let currSlide: number = 0;
	let openOverview: boolean = false;

	onMount(() => {
		// Update currSlide to correct value based on the current route
		$slides.forEach((slide, i) => {
			if (slide.route === $page.route.id) {
				currSlide = i;
			}
		});
	});

	const updateSlide = () => {
		$currStep = 0;
		$maxSteps = 0;
		goto($slides[currSlide].route);
	};

	const menuUpdate = (e: CustomEvent) => {
		currSlide = e.detail;
		updateSlide();
	};

	const handleKeydown = (event: KeyboardEvent) => {
		const key: string = event.key;

		if (openOverview) return;

		if (key === 'ArrowRight') {
			event.preventDefault();
			if ($currStep < $maxSteps) {
				$currStep += 1;
			} else if ($currStep === $maxSteps && currSlide < $slides.length - 1) {
				currSlide += 1;
				updateSlide();
			}
		} else if (key === 'ArrowLeft') {
			event.preventDefault();
			// if (currSlide != 0) {
			// 	currSlide -= 1;
			// 	updateSlide();
			// }
			if ($currStep > 0) {
				$currStep -= 1;
			} else if ($currStep === 0 && currSlide != 0) {
				currSlide -= 1;
				updateSlide();
			}
		} else if (key === 'b') {
			event.preventDefault();
			$currStep = 0;
		} else if (key === 'm') {
			openOverview = true;
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<Overview
	bind:open={openOverview}
	on:close={() => (openOverview = false)}
	on:update-slide={menuUpdate}
/>

<slot />
