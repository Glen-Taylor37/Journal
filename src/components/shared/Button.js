import styled, { css } from 'styled-components';

export const buttonStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	height: 100%;
	width: 100px;
	font-family: inherit;
	font-size: 13.3px;
	box-sizing: border-box;
	box-shadow: 0px 0px 1px 1px #1c0527;
	color: rgb(43, 30, 30);
	text-decoration: none;
`;

export const transparentStyle = css``;

export const Button = styled.button`${buttonStyle};`;
