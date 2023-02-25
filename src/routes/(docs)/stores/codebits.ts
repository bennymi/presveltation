export let storesEx = `<script lang="ts">
    import { slides, currSlide, maxSteps, currStep } from 'presveltation';
</script>`;

export let slidesEx = `<script lang="ts">
    import { slides } from 'presveltation';

    $: console.log($slides);
</script>`;

export let currSlideEx = `<script lang="ts">
    import { slides, currSlide } from 'presveltation';

    $: activeSlide = $slides[$currSlide];
</script>

<h1>{activeSlide.title}</h1>
<a href={activeSlide.route}>Go to current slide</a>`;

export let maxStepsEx = `<script lang="ts">
    import { onMount } from 'svelte';
    import { maxSteps } from 'presveltation';

    onMount(() => {
        $maxSteps = 5;
    });
</script>`;

export let currStepEx = `<script lang="ts">
    import { onMount} from 'svelte';
    import { maxSteps, currStep } from 'presveltation';

    onMount(() => {
        $maxSteps = 2;
    });
</script>

<h1>Step {$currStep}</h1>

{#if $currStep === 0}
    <p>Do something at step 0</p>
{:else if $currStep === 1}
    <p>Do something at step 1</p>
{:else if $currStep === 2}
    <p>Do something at step 2</p>
{/if}`;