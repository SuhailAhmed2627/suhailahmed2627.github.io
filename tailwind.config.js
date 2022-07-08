const defaultTheme = require("tailwindcss/defaultTheme");

const colors = {
	primary: {
		DEFAULT: "#0a192f",
	},
	secondary: {
		DEFAULT: "#00B4D8",
	},
	tertiary: {
		DEFAULT: "#112240",
	},
	white: {
		DEFAULT: "#ffffff",
	},
	black: {
		DEFAULT: "#000000",
	},
	transparent: {
		DEFAULT: "#00000000",
	},
};

const fontFamily = {
	title: ["Poppins", "Helvetica", "Arial", "sans-serif"],
	display: ["Calibre", "Helvetica", "Arial", "sans-serif"],
	mono: [
		"Roboto Mono",
		"Fira Code",
		"Fira Mono",
		"Menlo",
		"Monaco",
		"Consolas",
		"Liberation Mono",
		"Courier New",
		"monospace",
	],
	body: ["Inter", "Helvetica", "Arial", "sans-serif"],
};

const fontSize = {
	display: "6rem",
	h1: "3rem",
	h2: "2.5rem",
	h3: "2rem",
	h4: "1.5rem",
	h5: "1.25rem",
	h6: "1rem",
	small: "0.75rem",
	base: "1rem",
	large: "1.5rem",
};

module.exports = {
	content: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/pages/**/*.{ts,tsx,js,jsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
			colors,
		},
		fontFamily,
		fontSize,
	},
	plugins: [],
};
