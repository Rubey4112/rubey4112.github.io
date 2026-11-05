import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/** GitHub Pages user site is served from `/`. Project sites pass `BASE_PATH` from Actions. */
function basePath(): '' | `/${string}` {
	const raw = (process.env.BASE_PATH ?? '').trim();
	if (raw === '' || raw === '/') return '';
	const withSlash = raw.startsWith('/') ? raw : `/${raw}`;
	const trimmed = withSlash.replace(/\/+$/, '');
	if (trimmed === '') return '';
	return trimmed as `/${string}`;
}

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter({
				fallback: '404.html'
			}),
			paths: {
				base: basePath(),
				origin: 'https://rubey4112.github.io'
			}
		})
	]
});
