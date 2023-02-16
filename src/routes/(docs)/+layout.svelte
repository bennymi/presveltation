<script>
	import './docs.css';

	import 'highlight.js/styles/base16/dracula.css';

	import Navbar from '../../docs/Navbar.svelte';
</script>

<!-- <div class="min-h-full w-full">
	<div class="h-screen">lots of content here</div>
</div> -->

<div class="h-full min-h-screen dark:bg-gradient-to-tr dark:from-[#10032c] dark:to-purple-900">
	<Navbar />
	<div class="mx-auto max-w-2xl pt-20 pb-48">
		<slot />
	</div>
</div>
