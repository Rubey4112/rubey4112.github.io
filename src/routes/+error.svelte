<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Seo from '#lib/components/Seo.svelte';

	let missing = $derived(page.status === 404);
	let title = $derived(missing ? 'Page not found | Toan Do' : 'Something went wrong | Toan Do');
</script>

<Seo
	{title}
	description={missing
		? 'That page is not on Toan Do’s portfolio.'
		: 'This page could not be loaded.'}
/>

<div class="wrap links-page">
	<p class="kicker">{page.status}</p>
	<h1>{missing ? 'Page not found.' : 'Something went wrong.'}</h1>
	<p class="deck">
		{#if missing}
			That address is not on this site.
		{:else}
			{page.error?.message}
		{/if}
	</p>
	<ul class="link-row">
		<li><a href={resolve('/')}>Portfolio</a></li>
	</ul>
</div>
