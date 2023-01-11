<script lang="ts">
	import { goto } from '$app/navigation';
	import { currStep, maxSteps, slides } from '$lib/stores';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let currSlide: number = 0;

	onMount(() => {
		// Update currSlide to correct value based on the current route
		$slides.forEach((slide, i) => {
			console.log($page.route.id);
			if (slide.route === $page.route.id) {
				currSlide = i;
				console.log('currSlide', slide.route);
			}
		});
	});

	const updateSlide = () => {
		$currStep = 0;
		$maxSteps = 0;
		goto($slides[currSlide].route);
	};

	const handleKeydown = (event: KeyboardEvent) => {
		const key: string = event.key;

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
		}
	};
</script>

<svelte:window on:keydown={handleKeydown} />

<slot />
