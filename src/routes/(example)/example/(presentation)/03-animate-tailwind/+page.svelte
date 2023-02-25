<script lang="ts">
	import { addSteps } from '$lib/addsteps';
</script>

<div class="grid h-screen w-screen grid-cols-2 content-center items-center justify-center">
	<div class="flex justify-center">
		<h1 class="mx-auto text-left font-sans text-5xl font-black tracking-tighter text-neutral-900">
			Add <iconify-icon icon="logos:tailwindcss" /> transitions
		</h1>
	</div>
	<div class="grid h-screen grid-cols-2 grid-rows-2 items-center gap-y-2 bg-gray-800 text-white">
		<!-- STEP 1 -->
		<div
			class="mx-auto flex w-60 items-center justify-around rounded-md border-2 py-2 px-4 transition-all duration-300 ease-in"
			use:addSteps={[
				{ steps: '0', classes: 'border-gray-600' },
				{
					steps: '1',
					classes: 'scale-125 bg-gray-900 shadow-md shadow-teal-800 border-gray-900 border-teal-800'
				}
			]}
		>
			<div class="m-0 w-20">
				<lottie-player autoplay loop src="/lottieHumidity.json" />
			</div>
			<div>
				<h2
					class="font-sans text-2xl font-bold"
					use:addSteps={[
						{
							steps: '1',
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
			class="mx-auto flex w-60 items-center justify-around rounded-md border-2 py-2 px-4 transition-all duration-300 ease-in"
			use:addSteps={[
				{ steps: '0', classes: 'border-gray-600' },
				{
					steps: '2',
					classes: 'scale-125 bg-gray-900 shadow-md shadow-red-800 border-gray-900 border-red-800'
				}
			]}
		>
			<div class="m-0 w-20">
				<lottie-player autoplay loop src="/lottieTemperatureMeter.json" />
			</div>
			<div>
				<h2
					class="font-sans text-2xl font-bold"
					use:addSteps={[
						{
							steps: '2',
							classes: 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800'
						}
					]}
				>
					Temperature
				</h2>
			</div>
		</div>
		<div
			class="mx-auto flex w-60 items-center justify-around rounded-md border-2 py-2 px-4 transition-all duration-300 ease-in"
			use:addSteps={[
				{ steps: '0', classes: 'border-gray-600' },
				{
					steps: '3',
					classes:
						'scale-125 bg-gray-900 shadow-md shadow-yellow-800 border-gray-900 border-yellow-800'
				}
			]}
		>
			<div class="m-0 w-20">
				<lottie-player autoplay loop src="/lottieSunny.json" />
			</div>
			<div>
				<h2
					class="font-sans text-2xl font-bold"
					use:addSteps={[
						{
							steps: '3',
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
			class="mx-auto flex w-60 items-center justify-around rounded-md border-2 py-2 px-4 transition-all duration-300 ease-in"
			use:addSteps={[
				{ steps: '0', classes: 'border-gray-600' },
				{
					steps: '4',
					classes: 'scale-125 bg-gray-900 shadow-md shadow-blue-800 border-gray-900 border-blue-800'
				}
			]}
		>
			<div class="m-0 w-20">
				<lottie-player autoplay loop src="/lottieWindyIcon.json" />
			</div>
			<div>
				<h2
					class="font-sans text-2xl font-bold"
					use:addSteps={[
						{
							steps: '4',
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
