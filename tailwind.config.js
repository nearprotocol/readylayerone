module.exports = {
	theme: {
		extend: {
			maxWidth: {
				'screen-1/2': '50vw',
			},
		},
		fontFamily: {
			'primary': '"Rational TW Display", sans-serif',
			'secondary': 'Rational, sans-serif',
		},
		colors: {
			'current': 'currentColor',
			'inherit': 'inherit',

			'black': '#000',
			'white': '#fff',

			'blue': '#3c4cff',
			'teal': '#20f7e9',
			'lime': '#a4f400',
			'pink': '#fe09ff',

			'brown-dark': '#2f2615',
			'brown': '#635c50',
			'brown-light': '#d1ccbd',
		},
	},
	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
		translate: ['responsive', 'hover', 'focus', 'group-hover'],
        display [],
	},
	plugins: []
}
