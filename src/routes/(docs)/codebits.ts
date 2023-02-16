import type { FocusBlock } from "svhighlight";

export let folderStructure = `
src/routes/ 
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
    |- (notes)/
        |- notes/
            |- +layout.svelte       <- Notes layout (import Speaker here)
            |- +page.svelte         <- Notes page (can be left empty)
    |- +layout.svelte               <- Import app.css here
    |- app.css                      <- app.css for the Tailwind imports
`;

export let slidesLayout = `<script>
    import { Deck, slides } from 'svelte-show';

    $slides = [
        { route: '/00-intro', title: 'Introduction', notes: true },
        { route: '/01-motivation', title: 'Motivation', notes: true },
        { route: '/02-related works', title: 'Related Works', notes: true }
    ]
</script>

<Deck>
    <slot />
</Deck>`;

export let notesLayout = `<script>
    import { Speaker } from 'svelte-show';
</script>

<div class="h-screen min-h-screen">
	<Speaker />
</div>`;