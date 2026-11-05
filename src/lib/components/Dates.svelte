<script lang="ts">
	import type { Span } from '#lib/data/types.ts';

	let { span }: { span: Span } = $props();
</script>

<time datetime={span.start.datetime}>{span.start.label}</time>
{#if span.end}
	–
	{#if span.end === 'Present'}
		Present
	{:else}
		<time datetime={span.end.datetime}>{span.end.label}</time>
	{/if}
{/if}
