import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from "mdsvex";
import remarkMath from 'remark-math'
import rehypeKatexSvelte from 'rehype-katex-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions:[".svelte",".svx",".md"],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(),
		mdsvex({ extensions: ['.svx', '.md'],

		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatexSvelte] })],

	kit: {
		adapter: adapter()
	}
};

export default config;
