module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: [
		'plugin:tailwindcss/recommended',
		'plugin:vue/recommended',
		'eslint:recommended',
		'prettier',
		'eslint-config-prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'vue/html-closing-bracket-newline': [2, { multiline: 'never' }],
		'tailwindcss/no-custom-classname': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
	overrides: [
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
		},
	],
};
