<script lang="ts">
	import { page } from '$app/stores';

	$: console.log($page.route.id);
	$: console.log($page.route.id === '/');
	$: console.log($page);
</script>

<nav
	class="h-full space-y-8 overflow-y-auto bg-white/80 px-8 pt-6 text-sm shadow-sm shadow-purple-600/70 backdrop-blur-sm transition dark:bg-gray-900/30 dark:text-white"
>
	<div class="space-y-4">
		<a
			href="/"
			class="text-md pl-2 font-bold uppercase tracking-wide {$page.url.pathname === '/'
				? 'border-l-4 border-purple-700'
				: ''}"
		>
			Getting Started
		</a>
		<div class="text-md flex flex-col space-y-2 pl-6">
			<a href="/#project-structure">Project Structure</a>
			<a href="/#slides-folder">Slides Folder</a>
			<a href="/#notes-folder">Notes Folder</a>
		</div>
	</div>
</nav>
