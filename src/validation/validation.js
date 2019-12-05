import React from 'react';

export let reqiured = value => {
	if (value) return undefined;
	return 'Field is required';
}

export let maxLength = (ml) => (value) => {
	if(value.length>ml) return `Max length is ${ml} symbols`;
	return undefined;
}