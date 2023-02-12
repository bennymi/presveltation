<script lang="ts">
	import { addStepAnimation } from '$lib/addstepanimation';
	// import Katex from '$lib/Katex.svelte';
</script>

<!-- <div class="flex justify-evenly items-center bg-teal-800 min-h-screen"> -->
<div class="grid max-h-screen min-h-screen grid-cols-2 items-center bg-gray-800">
	<div class="mx-auto w-2/3">
		<lottie-player autoplay loop src="/lottieEvaporation.json" />
	</div>
	<div class="flex flex-col flex-wrap items-center px-12 text-white">
		<h1 class="mx-auto my-8 font-sans text-7xl font-black leading-none tracking-tight">
			Lottie Files
		</h1>
		<p class="font-sans text-xl font-light leading-loose text-gray-100">
			Easily add animated SVGs using the <a
				href="https://www.npmjs.com/package/@lottiefiles/lottie-player"
				class="text-blue-500 underline"
			>
				lottie-player
			</a>
			to give your slides some slick graphics
			<br />
			Download the lottie files as JSONs and add them to your
			<span class="rounded-md border-2 border-gray-600 bg-gray-600 p-1 font-mono">Static/</span>
			folder
			<br />
			This way you don't have to worry about requiring an internet connection
		</p>
	</div>
</div>
