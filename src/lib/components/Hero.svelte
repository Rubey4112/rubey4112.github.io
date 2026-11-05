<script lang="ts">
	import { focus, site } from '#lib/data/site.ts';
	import { media } from '#lib/media.ts';
	import SocialLinks from './SocialLinks.svelte';
</script>

<section class="hero" id="top" aria-labelledby="intro-heading">
	<div class="wrap">
		<div class="hero-grid">
			<div class="hero-copy">
				<p class="kicker">{site.standing} · {site.school}</p>
				<h1 id="intro-heading">{site.name}</h1>
				<p class="deck">Designing robots, circuit boards, and embedded systems.</p>
				<p class="hero-meta">
					{site.degree} · Expected {site.expectedShort} · GPA {site.gpa}
				</p>
				<SocialLinks email />
			</div>
			<figure class="portrait">
				<img
					src={media(site.portrait.src)}
					width={site.portrait.width}
					height={site.portrait.height}
					alt={site.portrait.alt}
				/>
				<figcaption>Electrical engineering · GMU</figcaption>
			</figure>
		</div>
		<ul class="focus-list" aria-label="Focus">
			{#each focus as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</section>
