<script>
	import { addSteps } from '$lib/addsteps';
</script>

<div class="flex h-screen max-h-screen flex-col justify-center bg-gray-900">
	<div class="max-w-5/6 mx-auto ">
		<div class="animate__animated step-1:animate__flip" use:addSteps>
			<iconify-icon icon="openmoji:deciduous-tree" class="text-9xl" />
		</div>
	</div>
	<h1
		class="max-w-5/6 mx-10 my-2 text-center font-sans text-5xl font-black leading-none tracking-tighter text-white"
	>
		Welcome to <span class="text-[#fff6a9] text-shadow-neon">SvelteShow</span>
	</h1>
	<div
		class="max-w-4/6 mx-auto mt-8 text-center font-sans text-2xl font-normal leading-relaxed text-gray-400"
	>
		<p>
			A library for creating presentations and slideshows using <iconify-icon
				icon="logos:svelte-kit"
				class="text-2xl"
			/>
			and <iconify-icon icon="logos:tailwindcss" class="text-2xl" /> .
		</p>
		<p />
	</div>

	<nav class="mx-auto mt-8 flex space-x-4">
		<a
			href="https://github.com/bennymi/svelte-show"
			class="flex items-center justify-center gap-1 font-sans text-lg font-semibold leading-relaxed text-blue-500 hover:text-blue-600"
		>
			<iconify-icon icon="mdi:github" class="text-2xl" />
			GitHub
		</a>
		<a
			href={'/'}
			class="flex items-center justify-center gap-1 font-sans text-lg font-semibold leading-relaxed text-gray-300 hover:text-gray-400"
		>
			<iconify-icon icon="mdi:book-open-page-variant" class="text-2xl" />
			Documentation
		</a>
		<a
			href={'/'}
			class="flex items-center justify-center gap-1 font-sans text-lg font-semibold leading-relaxed text-orange-500 hover:text-orange-600"
		>
			<iconify-icon icon="mdi:presentation-play" class="text-2xl" />
			Example
		</a>
	</nav>

	<div class="mx-auto mt-8 w-4/6 text-center font-sans text-lg font-normal text-blue-400">
		Press <kbd>m</kbd> to open an overview of all slides, and
		<kbd>s</kbd> to open the speaker view / notes. Use
		<kbd>&larr</kbd>
		and <kbd>&rarr</kbd> to move through the slides, and enter full screen mode by pressing
		<kbd>F11</kbd>.
	</div>

	<div class="mt-8 text-center text-lg text-gray-400">
		(These demo slides are currently not mobile friendly)
	</div>
</div>

<style>
	kbd {
		@apply rounded-lg bg-blue-600 px-2 py-1 font-mono font-bold text-white;
	}
</style>
