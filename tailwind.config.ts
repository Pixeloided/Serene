import { join } from 'path';
import type { Config } from 'tailwindcss';

import { serendipityTheme } from './SerendipityTheme';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			fontFamily: {
				Rosarivo: ['Rosarivo', 'serif'],
				ArchivoBlack: ['Archivo Black', 'sans-serif']
			},
			colors: {
				soft: '#f6e7dc'
			}
		}
	},
	plugins: [
		skeleton({
			themes: {
				custom: [serendipityTheme]
			}
		})
	]
} satisfies Config;

export default config;
