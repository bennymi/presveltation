export let addStepsEx = `<script lang="ts">
    import { addSteps } from 'svelte-show';
</script>

<h1
    class="animate__animated animate__fadeInUp transition-all"
    use:addSteps={[
        { steps: '1', classes: 'scale-125 text-blue-500' }
    ]}
>
    First fade in with animate.css 
    and then scale and change the text color to blue with Tailwind
</h1>`;

export let animateCssEx = `<script lang="ts">
    import { addSteps } from 'svelte-show';
</script>

<div 
    class="animate__animated animate__fadeInLeft step-1:animate__fadeOutRight" 
    use:addSteps
>
    <img src="/14.svg" alt="figure-1" class="m-auto h-2/3" />
</div>`;

export let tailwindEx = `<script lang="ts">
    import { addSteps } from 'svelte-show';
</script>

<div class="h-screen min-h-screen flex justify-center items-center">
    <div 
        class="border-2 p-2 transition-all duration-300 ease-in" 
        use:addSteps={[
            { steps: '0', classes: 'border-gray-600' },
            { steps: '1-2', classes: 'scale-125 bg-gray-900 shadow-md shadow-teal-800' }
        ]}
    >
        This will get transformed
    </div>
</div>`;