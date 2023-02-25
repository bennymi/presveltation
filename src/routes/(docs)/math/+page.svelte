<script lang="ts">
	import { CodeBlock } from 'svhighlight';

	import { katexEx, mathEx } from './codebits';
</script>

<h1>Math</h1>

<h2 id="katex">Katex</h2>

<p>
	You can of course use any library you want to implement equations, but for our example we are
	using <a
		class="font-bold underline"
		href="https://katex.org/docs/supported.html"
		target="_blank"
		rel="noopener noreferrer">Katex</a
	>. You need to install the library first:
</p>

<br />

<CodeBlock code="pnpm add -D katex" language="shell" showLineNumbers={false} />

<br />

<p>
	You can then import the <code>Katex</code> component to which you can pass your math string.
	There's
	<a
		href="https://katex.org/docs/api.html"
		class="font-bold underline"
		target="_blank"
		rel="noopener noreferrer">different ways to create the string</a
	>. In our case we are escaping the backslash, so the <code>\</code> is used twice.
</p>

<br />

<CodeBlock code={katexEx} language="svelte" />

<h2 id="math-example">Example</h2>

<p>
	To highlight parts of your equation you can use the <code>{'\\htmlClass{}{}'}</code> function. In
	the demo slide we duplicate the equation multiple times and always add an extra
	<code>htmlClass</code>. Next, we put all the equations into an array and update the
	<code>maxSteps</code>
	store to reflect the number of updates we want to show. Then we just pass the
	<code>currStep</code>
	equation to the <code>Katex</code> component, so only the active equation is shown.
</p>

<br />

<CodeBlock code={mathEx} language="svelte" />
