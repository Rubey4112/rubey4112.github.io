<script lang="ts">
	import type { Project } from '#lib/data/projects.ts';
	import { media } from '#lib/media.ts';
	import Dates from './Dates.svelte';

	let { project }: { project: Project } = $props();
</script>

{#if project.spotlight && project.image}
	<section class="band" aria-labelledby="now-heading">
		<div class="wrap band-inner">
			<div class="band-copy">
				<p class="kicker">{project.spotlight.kicker}</p>
				<h2 id="now-heading">{project.title}</h2>
				<p>{project.spotlight.summary}</p>
				<p class="band-meta"><Dates span={project.dates} /></p>
				{#if project.href}
					<a class="cta" href={project.href} rel="noopener noreferrer">{project.spotlight.cta}</a>
				{/if}
			</div>
			<figure class="band-figure">
				<img
					src={media(project.image.src)}
					width={project.image.width}
					height={project.image.height}
					alt={project.image.alt}
				/>
			</figure>
		</div>
	</section>
{/if}
