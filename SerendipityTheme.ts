import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const serendipityTheme: CustomThemeConfig = {
	name: 'the-serendipity-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '12px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #F2955E
		'--color-primary-50': '253 239 231', // #fdefe7
		'--color-primary-100': '252 234 223', // #fceadf
		'--color-primary-200': '252 229 215', // #fce5d7
		'--color-primary-300': '250 213 191', // #fad5bf
		'--color-primary-400': '246 181 142', // #f6b58e
		'--color-primary-500': '242 149 94', // #F2955E
		'--color-primary-600': '218 134 85', // #da8655
		'--color-primary-700': '182 112 71', // #b67047
		'--color-primary-800': '145 89 56', // #915938
		'--color-primary-900': '119 73 46', // #77492e
		// secondary | #84BFAE
		'--color-secondary-50': '237 245 243', // #edf5f3
		'--color-secondary-100': '230 242 239', // #e6f2ef
		'--color-secondary-200': '224 239 235', // #e0efeb
		'--color-secondary-300': '206 229 223', // #cee5df
		'--color-secondary-400': '169 210 198', // #a9d2c6
		'--color-secondary-500': '132 191 174', // #84BFAE
		'--color-secondary-600': '119 172 157', // #77ac9d
		'--color-secondary-700': '99 143 131', // #638f83
		'--color-secondary-800': '79 115 104', // #4f7368
		'--color-secondary-900': '65 94 85', // #415e55
		// tertiary | #8C1C85
		'--color-tertiary-50': '238 221 237', // #eedded
		'--color-tertiary-100': '232 210 231', // #e8d2e7
		'--color-tertiary-200': '226 198 225', // #e2c6e1
		'--color-tertiary-300': '209 164 206', // #d1a4ce
		'--color-tertiary-400': '175 96 170', // #af60aa
		'--color-tertiary-500': '140 28 133', // #8C1C85
		'--color-tertiary-600': '126 25 120', // #7e1978
		'--color-tertiary-700': '105 21 100', // #691564
		'--color-tertiary-800': '84 17 80', // #541150
		'--color-tertiary-900': '69 14 65', // #450e41
		// success | #84cc16
		'--color-success-50': '237 247 220', // #edf7dc
		'--color-success-100': '230 245 208', // #e6f5d0
		'--color-success-200': '224 242 197', // #e0f2c5
		'--color-success-300': '206 235 162', // #ceeba2
		'--color-success-400': '169 219 92', // #a9db5c
		'--color-success-500': '132 204 22', // #84cc16
		'--color-success-600': '119 184 20', // #77b814
		'--color-success-700': '99 153 17', // #639911
		'--color-success-800': '79 122 13', // #4f7a0d
		'--color-success-900': '65 100 11', // #41640b
		// warning | #EAB308
		'--color-warning-50': '252 244 218', // #fcf4da
		'--color-warning-100': '251 240 206', // #fbf0ce
		'--color-warning-200': '250 236 193', // #faecc1
		'--color-warning-300': '247 225 156', // #f7e19c
		'--color-warning-400': '240 202 82', // #f0ca52
		'--color-warning-500': '234 179 8', // #EAB308
		'--color-warning-600': '211 161 7', // #d3a107
		'--color-warning-700': '176 134 6', // #b08606
		'--color-warning-800': '140 107 5', // #8c6b05
		'--color-warning-900': '115 88 4', // #735804
		// error | #D41976
		'--color-error-50': '249 221 234', // #f9ddea
		'--color-error-100': '246 209 228', // #f6d1e4
		'--color-error-200': '244 198 221', // #f4c6dd
		'--color-error-300': '238 163 200', // #eea3c8
		'--color-error-400': '225 94 159', // #e15e9f
		'--color-error-500': '212 25 118', // #D41976
		'--color-error-600': '191 23 106', // #bf176a
		'--color-error-700': '159 19 89', // #9f1359
		'--color-error-800': '127 15 71', // #7f0f47
		'--color-error-900': '104 12 58', // #680c3a
		// surface | #d6c8ad
		'--color-surface-50': '249 247 243', // #f9f7f3
		'--color-surface-100': '247 244 239', // #f7f4ef
		'--color-surface-200': '245 241 235', // #f5f1eb
		'--color-surface-300': '239 233 222', // #efe9de
		'--color-surface-400': '226 217 198', // #e2d9c6
		'--color-surface-500': '214 200 173', // #d6c8ad
		'--color-surface-600': '193 180 156', // #c1b49c
		'--color-surface-700': '161 150 130', // #a19682
		'--color-surface-800': '128 120 104', // #807868
		'--color-surface-900': '105 98 85' // #696255
	}
};
