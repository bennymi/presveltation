<script lang="ts">
	import { addStepAnimation } from '$lib/addstepanimation';
	// import Katex from '$lib/Katex.svelte';
</script>

<!-- <div class="flex justify-evenly items-center bg-teal-800 min-h-screen"> -->
<div class="bg-gray-800 grid grid-cols-2 items-center min-h-screen max-h-screen">
	<div class="w-2/3 mx-auto">
		<lottie-player autoplay loop src="lottieEvaporation.json" />
	</div>
	<div class="flex flex-col text-white flex-wrap items-center px-12">
		<h1 class="font-sans font-black text-7xl tracking-tight mx-auto my-8 leading-none">
			Lottie Files
		</h1>
		<p class="font-sans font-light text-xl text-gray-100 leading-loose">
			Easily add animated SVGs using the <a
				href="https://www.npmjs.com/package/@lottiefiles/lottie-player"
				class="text-blue-500 underline"
			>
				lottie-player
			</a>
			to give your slides some slick graphics
			<br />
			Download the lottie files as JSONs and add them to your
			<span class="font-mono bg-gray-600 border-gray-600 border-2 rounded-md p-1">Static/</span>
			folder
			<br />
			This way you don't have to worry about requiring an internet connection
		</p>
	</div>
</div>
