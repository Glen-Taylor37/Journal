import styled from 'styled-components';
import ContentDiv from '../../shared/ContentDiv';
import colors from '../../shared/colors';
import { Button } from '../../shared/Button';

export const Title = styled.h1`
	margin: 0;
	margin-bottom: 10px;
	width: 100%;
	text-align: center;
`;

export const JournalTitle = styled.h4`
	margin-top: 5px;
	margin-bottom: 5px;
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

export const EmptyJournalDiv = styled.div`
	background: none;
	border-radius: 10px;
	grid-column-start: span 1;
	grid-row-start: span 1;
	display: flex;
	flex-direction: column;
	border: 2px dashed ${colors.black};
	justify-content: center;
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
	}
`;

export const DeleteButton = styled(Button)`
	align-self: flex-end;
	border: none;
	margin-right: 10px;
	height: 2em;
	width: fit-content;
	font-size: regular;
	background-color: ${colors.brightRed};
	color: ${colors.black};
	pointer-events: auto;
	overflow: hidden;

	transition: background-color .2s;
	&:hover {
		background-color: ${colors.red};
	}
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

export const CreateButton = styled(Button)`
	align-self: center;
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
