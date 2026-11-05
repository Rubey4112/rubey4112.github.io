<script lang="ts">
	import { experience } from '#lib/data/experience.ts';
	import Dates from './Dates.svelte';
</script>

<section class="section" id="experience" aria-labelledby="experience-heading">
	<div class="wrap">
		<div class="section-head">
			<p class="kicker">Experience</p>
			<h2 id="experience-heading">Recent roles.</h2>
		</div>
		<div class="role-list">
			{#each experience as role (role.title + role.org)}
				<article class="role">
					<p class="role-date"><Dates span={role.dates} /></p>
					<div>
						<h3 class="role-title">{role.title}</h3>
						<p class="role-org">{role.org}</p>
						{#if role.detail}
							<p class="role-detail">{role.detail}</p>
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
