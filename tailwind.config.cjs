/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			ubuntu: 'Ubuntu, sans-serif',
		},
		extend: {
			colors: {
				darkPurple: '#1b1523',
				midPink: '#c23866',
			},
		},
		plugins: [
			require('@tailwindcss/aspect-ratio'),
			require('@tailwindcss/forms'),
			require('@tailwindcss/line-clamp'),
			require('@tailwindcss/typography'),
		],
	},
};
