<script>
	import { addStepAnimation } from '$lib/addstepanimation';
</script>

<div class="flex flex-col h-screen max-h-screen justify-center">
	<div class="max-w-5/6 mx-auto ">
		<div class="animate__animated step-1:animate__flip" use:addStepAnimation>
			<iconify-icon icon="openmoji:deciduous-tree" class="text-9xl" />
		</div>
	</div>
	<h1
		class="font-sans font-black text-neutral-900 text-center text-5xl tracking-tighter max-w-5/6 mx-10 my-2 leading-none"
	>
		Welcome to svelte-presentation
	</h1>
	<div
		class="font-sans font-normal text-center text-2xl text-gray-600 max-w-4/6 mx-auto mt-8 leading-relaxed"
	>
		<p>
			A tool for creating presentations using <iconify-icon
				icon="logos:svelte-kit"
				class="text-2xl"
			/>
			and <iconify-icon icon="logos:tailwindcss" class="text-2xl" /> .
		</p>
		<p />
	</div>
	<nav class="flex space-x-4 mx-auto mt-8">
		<a
			href="https://github.com/bennymi/svelte-presentation"
			class="font-sans text-lg leading-relaxed font-semibold text-blue-600 hover:text-blue-700 flex justify-center items-center gap-1"
		>
			<iconify-icon icon="mdi:github" class="text-2xl" />
			GitHub
		</a>
		<a
			href={'/'}
			class="font-sans text-lg leading-relaxed font-semibold text-gray-800 hover:text-gray-900 flex justify-center items-center gap-1"
		>
			<iconify-icon icon="mdi:book-open-page-variant" class="text-2xl" />
			Documentation
		</a>
		<a
			href={'/'}
			class="font-sans text-lg leading-relaxed font-semibold text-orange-600 hover:text-orange-700 flex justify-center items-center gap-1"
		>
			<iconify-icon icon="mdi:presentation-play" class="text-2xl" />
			Example
		</a>
	</nav>
</div>
