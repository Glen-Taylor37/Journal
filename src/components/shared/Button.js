import styled, { css } from 'styled-components';
import colors from './colors';

export const buttonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	border: solid 2px ${colors.black};
	height: 100%;
	width: 100px;
	font-family: inherit;
	font-size: 13.3px;
	font-weight: bold;
	color: ${colors.black};
	text-decoration: none;

	transition: filter .2s;
	&:hover {
		filter: brightness(85%);
	}
`;

export const transparentStyle = css``;

export const Button = styled.button`${buttonStyle};`;
