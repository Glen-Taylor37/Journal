import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import UIContainer from '../shared/UIContainer';

const HeaderItemDiv = styled.div`width: 100%;`;

export const HeaderDiv = styled.div`
	height: 100%;
	width: 100%;
`;

const WhiteColor = `rgb(253, 255, 249)`;

export const TitleDiv = styled(HeaderItemDiv)`
	color: ${WhiteColor};
	background-color: rgb(70, 81, 184);
    padding-left: 15px;
    padding-right 15px;
	font-size: x-large;

`;

export const H1 = styled.h1`
	font-weight: bold;
	margin: 0;
	margin-left: 10px;
	display: inline;
`;

export const NavDiv = styled(HeaderItemDiv)`
	display: flex;
	flex-flow: row nowrap;
	align-items: baseline;
	justify-content: space-between;
    font-size: large;
    background-color: ${WhiteColor};
    & > div {
        padding-left: 40px;
    }

    div:last-of-type {
        padding-right: 10px;
    }
`;

export const Button = styled.button`
	height: 100%;
	width: auto;
	border: none;
	outline: none;
	box-shadow: none;
	font-size: inherit;
	font-family: inherit;
	display: inline;
	text-decoration: none;
	background-color: ${WhiteColor};

	&:hover {
		filter: brightness(85%);
	}
`;

export const InnerNavDiv = styled.div`
	height: 100%;
	display: inline;
`;

export const Vl = styled.div`
	border-right: 1px solid rgb(43, 30, 30);
	height: 80%;
	padding-left: 10px;
	margin-right: 10px;
	display: inline;
`;
