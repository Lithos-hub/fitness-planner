/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: {
					green: '#06d6a0',
				},
				secondary: {
					blue: '#118ab2',
					red: '#ef476f',
					yellow: '#ffd166',
					semidark: '#1E293B',
					dark: '#021419',
				},
			},
		},
	},
	plugins: [],
};
