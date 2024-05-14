/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					1: '#27272F',
					2: '#D62823',
				},
				grayscale: {
					1: '#060606',
					2: '#393944',
					3: '#1B1B23',
				},
				secondary: {
					green: '#06d6a0',
					blue: '#118ab2',
					red: '#ef476f',
					yellow: '#ffd166',
				},
			},
		},
	},
	plugins: [],
};
