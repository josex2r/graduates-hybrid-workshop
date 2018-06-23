'use strict';

module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	extends: [
		'bbva',
		'plugin:react/recommended'
	],
	plugins: [
		'bbva',
		'react'
	],
	env: {
		browser: true,
		node: true
	},
	rules:{
    'indent': [2, 2],
		'no-undef': 0,
		'no-unused-vars': 0,
		'no-magic-numbers': 0,
		'bbva/duplicated-if': 2,
		'bbva/infinite-loop': 2,
		'bbva/inline-conditional': 2,
		'bbva/jquery-selector-length': 2,
		'bbva/no-args-assignment': 2,
		'bbva/useless-increment': 2
	}
};
