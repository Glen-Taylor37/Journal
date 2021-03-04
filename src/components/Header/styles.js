import styled from 'styled-components/macro';
import colors from '@colors';

const HeaderItemDiv = styled.div`
	display: inline-grid;
	grid-template-columns: 25% 50% 25%;
	width: 100%;
`;

export const HeaderDiv = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	height: 100px;
`;

export const OuterTitleDiv = styled(HeaderItemDiv)`
	display: inline-grid;
	grid-template-columns: 25% 50% 25%;
	width: 100%;
	background-color: ${colors.blue};
`;

export const OuterNavDiv = styled(HeaderItemDiv)`
	width: 100%;
	background-color: ${colors.white};
    box-shadow: 2px 2px 2px 1px ${colors.blackShadow};
`;

export const TitleDiv = styled.div`
	grid-column-start: 2;
	background: none;
	width: 70%;
	color: ${colors.white};
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
	grid-column-start: 2;
	flex-flow: row nowrap;
	align-items: baseline;
	justify-content: space-between;
    font-size: large;
    z-index: 2;
    & > div {
        padding-left: 30px;
    }
`;

export const Button = styled.button`
	height: 100%;
	border: none;
	outline: none;
	box-shadow: none;
	font-size: inherit;
	font-family: inherit;
	display: inline;
	text-decoration: none;
	color: ${colors.black};
	background-color: ${colors.white};

	& > i {
		padding-right: 5px;
	}
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
