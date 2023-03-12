// Radix UI color system (https://www.radix-ui.com/colors)
const radixColors = require('@radix-ui/colors');

// Transform Radix color to object suitable for Tailwind CSS theme
// Filter out transparent palettes (eg 'tomatoA')
const getRadixUiPalette = (color) =>
	Object.entries(radixColors[color])
		.filter(([color]) => !color.match(/.*A\d+$/))
		.reduce((paletteObject, [colorName, colorValue]) => {
			paletteObject[colorName.replace(/\D/g, '')] = colorValue;
			return paletteObject;
		}, {});

const getLightDarkTuples = (tailwindName, radixName) => ({
	[tailwindName]: getRadixUiPalette(radixName),
	[`${tailwindName}-dark`]: getRadixUiPalette(`${radixName}Dark`),
});

// map Tailwind colors (name) to Radix colors (value)
const radixColorNames = {
	surface: 'sage',
	gray: 'gray',
	mauve: 'mauve',
	slate: 'slate',
	sage: 'sage',
	olive: 'olive',
	sand: 'sand',
	tomato: 'tomato',
	red: 'red',
	crimson: 'crimson',
	pink: 'pink',
	plum: 'plum',
	purple: 'purple',
	violet: 'violet',
	indigo: 'indigo',
	blue: 'blue',
	cyan: 'cyan',
	teal: 'teal',
	green: 'green',
	grass: 'grass',
	brown: 'brown',
	orange: 'orange',
	sky: 'sky',
	mint: 'mint',
	lime: 'lime',
	yellow: 'yellow',
	amber: 'amber',
	gold: 'gold',
	bronze: 'bronze',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			transparent: 'transparent',
			current: 'currentColor',
			...Object.entries(radixColorNames).reduce(
				(tailwindColors, [tailwindName, radixName]) => ({
					...tailwindColors,
					...getLightDarkTuples(tailwindName, radixName),
				}),
				{},
			),
		},
	},
	plugins: [],
};
