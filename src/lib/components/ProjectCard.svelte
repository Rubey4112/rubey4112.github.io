<script lang="ts">
	import type { Project } from '#lib/data/projects.ts';
	import { media } from '#lib/media.ts';
	import Dates from './Dates.svelte';

	let { project }: { project: Project } = $props();
</script>

<article class={['story', !project.image && 'story--mark']} id={project.id}>
	{#if project.image}
		<div class="story-media">
			<img
				src={media(project.image.src)}
				width={project.image.width}
				height={project.image.height}
				alt={project.image.alt}
				loading="lazy"
			/>
		</div>
	{:else}
		<div class="story-mark" aria-hidden="true">{project.mark}</div>
	{/if}
	<div class="story-body">
		<p class="tag">{project.tag}</p>
		<h3>
			{#if project.href}
				<a href={project.href} rel="noopener noreferrer">{project.title}</a>
			{:else}
				{project.title}
			{/if}
		</h3>
		<p>{project.summary}</p>
		<p class="story-meta">
			<span><Dates span={project.dates} /></span>
			{#if project.href}
				<a href={project.href} rel="noopener noreferrer">
					Repository<span class="visually-hidden"> for {project.title}</span>
				</a>
			{/if}
		</p>
	</div>
</article>
