<script lang="ts">
	import { site } from '#lib/data/site.ts';
	import SocialLinks from './SocialLinks.svelte';
</script>

<section class="section contact" id="contact" aria-labelledby="contact-heading">
	<div class="wrap">
		<p class="kicker">Contact</p>
		<h2 id="contact-heading">Electrical engineering, robotics, and space.</h2>
		<p class="contact-lead">
			I am looking for internships in those areas. The fastest way to reach me is email.
		</p>
		<p><a class="email" href="mailto:{site.email}">{site.email}</a></p>
		<SocialLinks />
	</div>
</section>
