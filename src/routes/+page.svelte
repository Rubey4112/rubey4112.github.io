<script lang="ts">
	import About from '#lib/components/About.svelte';
	import Contact from '#lib/components/Contact.svelte';
	import Experience from '#lib/components/Experience.svelte';
	import Featured from '#lib/components/Featured.svelte';
	import Hero from '#lib/components/Hero.svelte';
	import Projects from '#lib/components/Projects.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { site } from '#lib/data/site.ts';
	import { projects } from '#lib/data/projects.ts';

	const spotlight = projects.find((project) => project.spotlight);
</script>

<Seo title={site.title} description={site.description} />
<Hero />
{#if spotlight}
	<Featured project={spotlight} />
{/if}
<About />
<Experience />
<Projects />
<Contact />
