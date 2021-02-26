import styled, { css } from 'styled-components/macro';
import colors from '../shared/colors';

const HeaderItemDiv = styled.div`width: 100%;`;

export const HeaderDiv = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	height: 100px;
`;

export const TitleDiv = styled(HeaderItemDiv)`
	color: ${colors.white};
	background-color: ${colors.blue};
	font-size: x-large;

    & > div {
        padding-left: 15px;
    }
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
    background-color: ${colors.white};
    box-shadow: 2px 2px 2px 1px ${colors.blackShadow};
    z-index: 2;
    & > div {
        padding-left: 40px;
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
	background-color: ${colors.white};

	&:hover {
		filter: brightness(85%);
	}
`;

export const RedButton = styled(Button)`
    background-color: ${colors.red}
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
