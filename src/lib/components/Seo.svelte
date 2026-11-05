<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/data/site.ts';

	let { title, description }: { title: string; description: string } = $props();

	let canonical = $derived(new URL(page.url.pathname, site.url).href);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.name} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={site.image} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={site.image} />
</svelte:head>
