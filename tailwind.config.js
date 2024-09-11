/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	  ],
	theme: {
	  extend: {	  
		colors: {
			'text': '#19100b',
			'background': '#fcf9f8',
			'primary': '#d76c33',
			'secondary': '#f2ad88',
			'accent': '#f88a4f',
			'darktext': '#f4ebe6',
            'dakbackground': '#070403',
           'darkprimary': '#cc6228',
            'darksecondary': '#77320d',
            'darkaccent': '#b04207',
		   },
		   
  
	  },
	},
	plugins: [],
  }

