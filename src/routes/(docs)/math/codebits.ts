export let katexEx = `<script lang="ts">
    import { Katex } from 'presveltation';

    let equation = \`E = \\\\sqrt{(mc^2) + (pc)^2}\`;
</script>

<Katex math={equation} />`;

export let mathEx = `<script lang="ts">
    import { maxSteps, currStep, Katex } from 'presveltation';

    let classE = 'text-teal-400';
    let classM = 'text-purple-400';
    let classC = 'text-orange-400';

    let equE = '\\\\htmlClass{\${classE}}{E} = mc^2';
    let equM = '\\\\htmlClass{\${classE}}{E} = \\\\htmlClass{\${classM}{m}c^2';
    let equC = '\\\\htmlClass{\${classE}}{E} = \\\\htmlClass{\${classM}{m}\\\\htmlClass{\${classC}{c}^2';
    
    $: equations = [equE, equM, equC];
    $: {
        $maxSteps = equations.length - 1;
    }
    $: currEquation = equations[$currStep];
</script>

<Katex math={currEquation} />`;