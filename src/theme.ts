import { extendTheme } from "native-base"

const config = {
	useSystemColorMode: false,
	initialColorMode: 'light',
}

const colors = {
	50: '#EEF2F6',
	100: '#D7E0EB',
	200: '#BFCCE0',
	300: '#A8B8D5',
	400: '#91A4CA',
	500: '#7A90BF',
	600: '#627BA4',
	700: '#4B5B7A',
	800: '#343C50',
	900: '#1D1F25'
}

export default extendTheme({ config, colors })
