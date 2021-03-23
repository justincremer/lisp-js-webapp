import { extendTheme } from '@chakra-ui/react';

const colors = {
	primary: {
		100: '#E5FCF1',
		200: '#27EF96',
		300: '#10DE82',
		400: '#0EBE6F',
		500: '#0CA25F',
		600: '#0A864F',
		700: '#086F42',
		800: '#075C37',
		900: '#064C2E',
	},
	teal: {
		50: '#E6FFFA',
		100: '#B2F5EA',
		200: '#81E6D9',
		300: '#4FD1C5',
		400: '#38B2AC',
		500: '#319795',
		600: '#2C7A7B',
		700: '#285E61',
		800: '#234E52',
		900: '#1D4044',
	},
	Blue: {
		50: '#EBF8FF',
		100: '#BEE3F8',
		200: '#90CDF4',
		300: '#63B3ED',
		400: '#4299E1',
		500: '#3182CE',
		600: '#2B6CB0',
		700: '#2C5282',
		800: '#2A4365',
		900: '#1A365D',
	},
};

const theme = extendTheme({ colors });

export { theme };
