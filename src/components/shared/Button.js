import styled, { css } from 'styled-components';

export const buttonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 2em;
	width: fit-content;
	border: none;
	border-radius: 4px;
	outline: none;
	padding-left: 4px;
	padding-right: 4px;
	font-family: inherit;
	font-size: regular;
	font-weight: regular;
	color: ${(props) => props.theme.foreText};
	text-decoration: none;
	box-shadow: 0px 2px 2px 1px ${(props) => props.theme.foregroundShadow};

	transition: filter .2s;
	&:hover {
		filter: brightness(85%);
	}
`;

export const transparentStyle = css``;

export const Button = styled.button`${buttonStyle};`;
