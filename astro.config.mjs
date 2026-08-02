// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
