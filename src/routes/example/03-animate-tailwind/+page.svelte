<script lang="ts">
	import { addStepAnimation } from '$lib/addstepanimation';
</script>

<div class="grid grid-cols-2 items-center justify-center content-center w-screen h-screen">
	<div class="flex justify-center">
		<h1 class="font-sans font-black text-neutral-900 text-5xl text-left mx-auto tracking-tighter">
			Add <iconify-icon icon="logos:tailwindcss" /> transitions
		</h1>
	</div>
	<div class="grid grid-cols-2 grid-rows-2 gap-y-2 h-screen items-center bg-gray-800 text-white">
		<!-- STEP 1 -->
		<div
			class="w-60 mx-auto flex justify-around border-2 items-center py-2 px-4 rounded-md transition-all ease-in duration-300"
			use:addStepAnimation={[
				{ step: '0', classes: 'border-gray-600' },
				{
					step: '1',
					classes: 'scale-125 bg-gray-900 shadow-md shadow-teal-800 border-gray-900 border-teal-800'
				}
			]}
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieHumidity.json" />
			</div>
			<div>
				<h2
					class="font-sans font-bold text-2xl"
					use:addStepAnimation={[
						{
							step: '1',
							classes: 'text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-800'
						}
					]}
				>
					Humidity
				</h2>
			</div>
		</div>
		<!-- STEP 2 -->
		<div
			class="w-60 mx-auto flex justify-around border-2 items-center py-2 px-4 rounded-md transition-all ease-in duration-300"
			use:addStepAnimation={[
				{ step: '0', classes: 'border-gray-600' },
				{
					step: '2',
					classes: 'scale-125 bg-gray-900 shadow-md shadow-red-800 border-gray-900 border-red-800'
				}
			]}
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieTemperatureMeter.json" />
			</div>
			<div>
				<h2
					class="font-sans font-bold text-2xl"
					use:addStepAnimation={[
						{
							step: '2',
							classes: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800'
						}
					]}
				>
					Temperature
				</h2>
			</div>
		</div>
		<div
			class="w-60 mx-auto flex justify-around border-2 items-center py-2 px-4 rounded-md transition-all ease-in duration-300"
			use:addStepAnimation={[
				{ step: '0', classes: 'border-gray-600' },
				{
					step: '3',
					classes:
						'scale-125 bg-gray-900 shadow-md shadow-yellow-800 border-gray-900 border-yellow-800'
				}
			]}
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieSunny.json" />
			</div>
			<div>
				<h2
					class="font-sans font-bold text-2xl"
					use:addStepAnimation={[
						{
							step: '3',
							classes:
								'text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800'
						}
					]}
				>
					Sun
				</h2>
			</div>
		</div>
		<div
			class="w-60 mx-auto flex justify-around border-2 items-center py-2 px-4 rounded-md transition-all ease-in duration-300"
			use:addStepAnimation={[
				{ step: '0', classes: 'border-gray-600' },
				{
					step: '4',
					classes: 'scale-125 bg-gray-900 shadow-md shadow-blue-800 border-gray-900 border-blue-800'
				}
			]}
		>
			<div class="w-20 m-0">
				<lottie-player autoplay loop src="/lottieWindyIcon.json" />
			</div>
			<div>
				<h2
					class="font-sans font-bold text-2xl"
					use:addStepAnimation={[
						{
							step: '4',
							classes: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800'
						}
					]}
				>
					Wind
				</h2>
			</div>
		</div>
	</div>
</div>
