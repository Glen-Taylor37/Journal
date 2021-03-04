import styled, { keyframes } from 'styled-components';
import ContentDiv from '@shared/ContentDiv';
import colors from '@colors';
import { Button } from '@shared/Button';

export const Title = styled.h1`
	margin: 0;
	margin-bottom: 10px;
	width: 100%;
	text-align: center;
`;

export const JournalTitle = styled.h4`
	font-size: large;
	margin-top: 5px;
	margin-bottom: 10px;
`;

export const JournalListDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, 200px);
	grid-auto-rows: 200px;
	justify-content: center;
	column-gap: 10px;
	row-gap: 10px;
	flex-grow: 1;
	margin-top: 10px;
	padding-bottom: 10px;
`;

export const JournalDiv = styled.div`
	background-color: ${colors.white};
	border-radius: 4px;
	grid-column-start: span 1;
	grid-row-start: span 1;
	box-shadow: 0px 2px 4px 2px ${colors.blackShadow};

	display: flex;
	text-decoration: none;
	flex-direction: column;
	padding-bottom: 10px;
	color: ${colors.black};

	transition: background-color .2s, box-shadow .2s, filter .5s;
	&:hover {
		box-shadow: 0px 2px 4px 4px ${colors.blackShadow};
		& > div {
			transition: background-color .2s;
			background-color: ${colors.brightBlue};
		}

		button {
			opacity: 1.0;
		}
	}
`;

export const DeleteButton = styled(Button)`
	height: 2em;
	width: fit-content;
	align-self: flex-end;
	margin-right: 10px;
	color: ${colors.red};
	font-size: regular;
	background: none;
	border: none;
	box-shadow: none;
	pointer-events: auto;
	opacity: 0.0;
	outline: none;

	transition: background-color .2s, opacity .5s;
	&:hover {
		background-color: ${colors.red};
		color: ${colors.black};
	}
`;

export const DetailDiv = styled.div`font-size: small;`;

export const ViewButton = styled(Button)`
	align-self: center;
	margin: 0;
	border: none;
	background: none;
	height: 2em;
	width: fit-content;
	font-size: regular;
	box-shadow: none;
	color: ${colors.brightBlue};
	outline: none;
	opacity: 0.0;
	cursor: pointer; 
	transition: background-color .2s, opacity .5s;
`;

export const JournalLinkDiv = styled.div`
	border-radius: 10px;
	height: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-decoration: none;
	color: ${colors.black};
	pointer-events: auto;
	align-self: center;
	width: 80%;
`;

export const EmptyJournalDiv = styled.div`
	display: grid;
	align-items: center;
	justify-items: center;
	background: none;
	grid-column-start: span 1;
	grid-row-start: span 1;
	width: 100%;
	height: 100%;
	justify-self: center;
	align-self: center;
	box-shadow: 0px 0px 0px 0px;
	text-align: center;
	transition: background-color .5s, box-shadow .25s;
`;

const hover = keyframes`
	from {
		background-color: ${colors.darkerWhite}
		width: 50%;
		height: 50%;
	}
	to {
		background-color: ${colors.white};
		width: 55%;
		height: 55%;
	}

`;

export const OutlineDiv = styled.div`
	grid-area: 1 / 1 / 1 / 1;
	width: 50%;
	height: 50%;
	background-color: ${colors.darkerWhite};
	border: dashed 2px ${colors.blue};
	border-radius: 4px;

	&:hover {
		animation: ${hover} .1s ease-in-out 2 alternate;
	}
`;

export const CreateButton = styled(Button)`
	grid-area: 1 / 1 / 1 / 1;
	background-color: ${colors.brightBlue};
	color: ${colors.white};
	box-shadow: 0px 2px 2px 1px ${colors.blackShadow};
	border: none;
	transition: box-shadow .2s;
	&:hover {
		box-shadow: 0px 2px 2px 2px ${colors.blackShadow};
	}
`;

export const BannerDiv = styled.div`
	background-color: ${colors.blue};
	align-self: center;
	margin-top: 5px;
	width: 95%;
	height: 10%;
	border-radius: 4px;
	transition: background-color .2s;
`;
