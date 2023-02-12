<script lang="ts">
	import { slides, currSlide, currStep, maxSteps } from '$lib/stores';
	import Timer from './Timer.svelte';

	$: console.log('Inside Notes: currStep =', $currStep);
	$: slide = $slides[$currSlide];
	$: notesRoute = slide.notes ? slide.notesRoute ?? `${slide.route}/notes` : '';
	$: console.log('Inside Notes: slide =', slide);
</script>

<div class="fixed top-0 left-0 z-20 m-4">
	<Timer />
</div>

{#if notesRoute}
	<iframe
		src={notesRoute}
		class="fixed top-0 left-0 bottom-0 right-0 z-10 m-0 h-full w-full overflow-hidden border-none p-0"
		title={`Notes: ${slide.title}`}
		frameborder="0"
	/>
{:else}
	<div class="flex h-screen min-h-screen flex-col items-center justify-center">
		<h1 class="text-center text-xl font-bold">
			Slide {$currSlide + 1}/{$slides.length}
		</h1>
		<h1 class="mt-2 mb-4 text-center text-2xl font-bold text-blue-700">
			{slide.title}
		</h1>
		<p class="text-gray-700">No Notes Available</p>
		<iframe
			src={slide.route}
			class="h-3/4 w-3/4 scale-75 rounded-lg border-2 border-blue-700"
			title={`Notes: ${slide.title}`}
			frameborder="0"
		/>
	</div>
{/if}
