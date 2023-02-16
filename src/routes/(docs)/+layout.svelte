<script>
	import './docs.css';
	import 'highlight.js/styles/base16/dracula.css';

	import Navbar from '../../docs/Navbar.svelte';
	import Sidebar from '../../docs/Sidebar.svelte';
</script>

<!-- <div class="min-h-full w-full">
	<div class="h-screen">lots of content here</div>
</div> -->

<div class="h-full min-h-screen dark:bg-gradient-to-tr dark:from-[#10032c] dark:to-purple-900">
	<Navbar />
	<!-- <Sidebar /> -->
	<div class="flex">
		<aside class="sticky top-14 h-screen overflow-y-auto">
			<Sidebar />
		</aside>
		<div class="mx-auto max-w-2xl pt-20 pb-56">
			<slot />
		</div>
	</div>
</div>
