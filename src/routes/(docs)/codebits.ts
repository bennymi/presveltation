import type { FocusBlock } from "svhighlight";

export let tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./node_modules/svelte-show/**/*.{svelte,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

export let folderStructure = `
src/routes/ 
    |- (notes)/
        |- notes/
            |- +layout.svelte       <- Notes layout (import Speaker here)
            |- +page.svelte         <- Notes page (can be left empty)
    |- (slides)/
        |- slide 1/                 <- These are your slide folders / pages
            |- notes/
                |- +page.svelte     <- Notes go into a "notes/" sub-folder
            |- +page.svelte
        |- slide 2/
            |- notes/
                |- +page.svelte
            |- +page.svelte
        |- +layout.svelte           <- Slide layout (import Deck here)
        |- +page.svelte             <- Starting slide at route "/"
    |- +layout.svelte               <- Import app.css here
    |- app.css                      <- app.css for the Tailwind imports
`;

export let slidesLayout = `<script lang="ts">
    import 'animate.css';
    
    import { Deck, slides } from 'svelte-show';

    $slides = [
        { route: '/00-intro', title: 'Introduction', notes: false },
        { route: '/01-motivation', title: 'Motivation', notes: true },
        { route: '/02-related-works', title: 'Related Works', notes: true }
    ]
</script>

<Deck notesURL="/notes">
    <slot />
</Deck>`;

export let notesLayout = `<script lang="ts">
    import { Speaker } from 'svelte-show';
</script>

<div class="h-screen min-h-screen">
	<Speaker />
</div>`;