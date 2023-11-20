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
				darkPink: '#c23866',
			},
		},
		plugins: [],
	},
};
