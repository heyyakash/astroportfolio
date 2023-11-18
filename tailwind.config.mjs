/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary :"#13151A",
				sec :"#A4A4A4"
			},
			backgroundColor:{
				primary :"#13151A",
				sec :"#A4A4A4"
			},
		},
	},
	plugins: [],
	darkMode:"class"
}
