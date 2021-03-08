const colors = {
	white        : `rgb(253, 255, 249)`,
	darkerWhite  : `rgb(243, 245, 241)`,
	blackShadow  : `rgba(0, 0, 0, 0.5)`,
	black        : `rgb(0,0,0,1)`,
	blue         : `rgb(70, 81, 184)`,
	brightBlue   : `rgb(110, 111, 234)`,
	blueGradient : `linear-gradient(150deg, rgb(90,101, 204), rgb(50, 70, 170))`,
	purple       : `rgb(170, 150, 200)`,
	red          : `rgb(220, 70, 80)`,
	brightRed    : `rgb(250, 130, 120)`,
	green        : `rgb(140, 220, 120)`
};

export const lightTheme = {
	background       : `rgb(245, 245, 243)`,
	foreground       : `rgb(253, 253, 253)`,
	foregroundShadow : `rgba(0, 0, 0, 0.5)`,
	foreText         : `rgb(0,0,0,1)`,

	accent           : `rgb(80, 91, 194)`,
	brightAccent     : `rgb(120, 121, 244)`,

	red              : `rgb(220, 70, 80)`,
	redHover         : `rgb(170, 55, 54)`,

	buttonHover      : `rgb(225, 225, 222)`,

	modalBackground  : `rgba(31, 29, 41, 0.678)`
};

export const darkTheme = {
	background       : `rgb(30, 30, 34)`,
	foreground       : `rgb(37, 36, 39)`,
	foregroundShadow : `rgba(0, 0, 0, 0.2)`,
	foreText         : `rgb(255, 255, 255)`,

	accent           : `rgb(30, 71, 74)`,
	brightAccent     : `rgb(40, 88, 84)`,

	red              : `rgb(190, 50, 60)`,
	redHover         : `rgb(160, 30, 40)`,

	buttonHover      : `rgb(57, 56, 63)`,

	modalBackground  : `rgba(3, 5, 8, .678)`
};

export const LIGHT_THEME = 'LIGHT_THEME';
export const DARK_THEME = 'DARK_THEME';
export default colors;
