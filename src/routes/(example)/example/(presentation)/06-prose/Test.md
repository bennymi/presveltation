<script lang="ts">
	import { addSteps } from '$lib/addsteps';

	let classP = 'text-blue-400';

</script>


# We even got Markdown (thanks to [MDSveX](https://mdsvex.pngwn.io/))!

<div use:addSteps={[{ steps: '1', classes: classP }]}>

This is some *markdown*!

$$e^{i \pi} + 1 = 0$$

That is dollar sign math.

</div>

<div use:addSteps={[{ steps: '2', classes: classP }]}>

Markdown test:

1. A
2. List

* You can change the color of bullets
* like this: `prose-li:marker:text-emerald-200`

| Markdown | Tables |
|----------|--------|
| work,    | too!   |

```javascript
let x = Document.getElementById('some-div')
x.innerHTML = 'Syntax Highlighting in Markdown!'
```

</div>