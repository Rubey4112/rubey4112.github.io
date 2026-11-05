<script lang="ts">
	import { projects } from '#lib/data/projects.ts';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="section" id="projects" aria-labelledby="projects-heading">
	<div class="wrap">
		<div class="section-head">
			<p class="kicker">Projects</p>
			<h2 id="projects-heading">Selected work.</h2>
		</div>
		<div class="story-list">
			{#each projects as project (project.id)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
