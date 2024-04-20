import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

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
				soft: '#f6e7dc',
				'ss-purple': '#8C1C85',
				'ss-teal': '#84BFAE',
				'ss-beige': '#D9CCB4',
				'ss-orange': '#F2955E',
				'ss-red': '#BF6565'
			},
			backgroundImage: {
				'radial-purple': 'radial-gradient(circle, #5ebfa3 0%, #84BFAE 100%);',
				'radial-transparent': 'radial-gradient(circle, transparent 75%, #84BFAE 100%);',
				'star': 'url("/icons/star.svg")'
			},
			minWidth: {
				'1200': '1200px',
				'2000': '2000px'
			},
			backgroundSize: {
				'10': '10%'
			},
		}
	},
	plugins: [
		forms,
		skeleton
	]
} satisfies Config;

export default config;
