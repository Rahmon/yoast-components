/* eslint-disable require-jsdoc */

import { sprintf, getI18n, setLocaleData } from "@wordpress/i18n";

function __( string ) {
	return string;
}

function _x( string ) {
	return string;
}

// Mock works for English, because our source translations are in English.
function _n( single, plural, number ) {
	if ( number === 1 ) {
		return single;
	}

	return plural;
}

function _nx( single, plural, number ) {
	return _n( single, plural, number );
}

export {
	__,
	_x,
	_n,
	_nx,
	setLocaleData,
	sprintf,
	getI18n,
};
