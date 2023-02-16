<script>
	import './docs.css';
	import 'highlight.js/styles/base16/dracula.css';

	import Navbar from '../../docs/Navbar.svelte';
	import Sidebar from '../../docs/Sidebar.svelte';
</script>

<div class="h-full min-h-screen dark:bg-gradient-to-tr dark:from-[#10032c] dark:to-purple-900">
	<Navbar />
	<div class="flex">
		<aside class="sticky top-14 h-screen overflow-y-auto">
			<Sidebar />
		</aside>
		<div class="mx-auto w-3/6 max-w-3xl pt-20 pb-56">
			<slot />
		</div>
	</div>
</div>
