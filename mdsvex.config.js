import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
		quotes: boolean = true,
		ellipses: boolean = true,
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
