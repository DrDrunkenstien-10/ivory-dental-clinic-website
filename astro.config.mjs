// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ivorydentalpune.in/',
	integrations: [
		sitemap({
			filter: (page) => !new URL(page).pathname.startsWith('/404'),
		}),
	],
	// Keep the generated static output compact and deployment-ready.
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		build: {
			minify: 'esbuild',
			cssMinify: 'esbuild',
		},
	},
});
