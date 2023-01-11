<script lang="ts">
	// import Transition from 'svelte-transition';
	import { addStepAnimation } from '$lib/addstepanimation';
</script>

<div class="grid grid-cols-2 items-center justify-center content-center w-screen h-screen">
	<div class="flex justify-center">
		<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mx-auto tracking-tighter">
			Add <iconify-icon icon="logos:tailwindcss" /> transitions
		</h1>
	</div>
	<div class="grid grid-cols-2 grid-rows-2 gap-y-2 h-screen items-center bg-gray-800 text-white">
		<div
			class="w-60 mx-auto flex justify-around border-2 border-gray-600 items-center py-2 px-4 rounded-md transition-all ease-in duration-300 step-1:scale-125 step-1:bg-gray-600"
			use:addStepAnimation
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieHumidity.json" />
			</div>
			<div>
				<h2 class="font-sans font-bold text-2xl">Humidity</h2>
			</div>
		</div>
		<div
			class="w-60 mx-auto flex justify-around border-2 border-gray-600 items-center py-2 px-4 rounded-md transition-all ease-in duration-300 step-2:scale-125 step-2:bg-gray-600"
			use:addStepAnimation
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieTemperatureMeter.json" />
			</div>
			<div>
				<h2 class="font-sans font-bold text-2xl">Temperature</h2>
			</div>
		</div>
		<div
			class="w-60 mx-auto flex justify-around border-2 border-gray-600 items-center py-2 px-4 rounded-md transition-all ease-in duration-300 step-3:scale-125 step-3:bg-gray-600"
			use:addStepAnimation
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieSunny.json" />
			</div>
			<div>
				<h2 class="font-sans font-bold text-2xl">Sun</h2>
			</div>
		</div>
		<div
			class="w-60 mx-auto flex justify-around border-2 border-gray-600 items-center py-2 px-4 rounded-md transition-all ease-in duration-300 step-4:scale-125 step-4:bg-gray-600"
			use:addStepAnimation
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieWindyIcon.json" />
			</div>
			<div>
				<h2 class="font-sans font-bold text-2xl">Wind</h2>
			</div>
		</div>
	</div>
</div>
