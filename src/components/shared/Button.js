import styled, { css } from 'styled-components';
import colors from './colors';

export const buttonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 6px;
	height: 2em;
	width: fit-content;
	padding-left: 4px;
	padding-right: 4px;
	font-family: inherit;
	font-size: 13.3px;
	font-weight: bold;
	color: ${colors.black};
	text-decoration: none;
	box-shadow: 0px 2px 2px 1px ${colors.blackShadow};

	transition: filter .2s;
	&:hover {
		filter: brightness(85%);
	}
`;

export const transparentStyle = css``;

export const Button = styled.button`${buttonStyle};`;
