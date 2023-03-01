<div class="flex h-screen w-screen flex-col content-center items-center justify-center">
	<h1 class="mt-8 font-sans text-5xl font-black tracking-tighter text-neutral-900">Get Started</h1>
	<nav class="mx-auto mt-8 flex space-x-4">
		<a
			href="https://github.com/bennymi/presveltation"
			class="flex items-center justify-center gap-1 rounded-lg bg-blue-500 px-2 py-1 font-sans text-lg font-semibold leading-relaxed text-white ring-1 ring-blue-500 transition-all hover:bg-white hover:text-blue-500"
		>
			<iconify-icon icon="mdi:github" class="text-2xl" />
			GitHub
		</a>
		<a
			href={'/'}
			data-sveltekit-preload-data="tap"
			class="flex items-center justify-center gap-1 rounded-lg bg-gray-800 px-2 py-1 font-sans text-lg font-semibold leading-relaxed text-gray-300 transition-all hover:bg-gray-900 hover:text-gray-200"
		>
			<iconify-icon icon="mdi:book-open-page-variant" class="text-2xl" />
			Documentation
		</a>
	</nav>
</div>
