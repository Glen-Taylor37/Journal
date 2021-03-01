import styled from 'styled-components';
import ContentDiv from '../../shared/ContentDiv';
import colors from '../../shared/colors';

export const Title = styled.h3`
	font-size: 30px;
	margin: 0;
	margin-bottom: 10px;
`;

export const JournalListDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 200px);
	grid-auto-rows: 200px;
	column-gap: 10px;
	row-gap: 10px;
	flex-grow: 1;
	margin-top: 10px;
	padding-bottom: 10px;
`;

export const JournalDiv = styled.div`
	background-color: ${colors.blue};
	border-radius: 10px;
	border: 2px solid ${colors.black};
	grid-column-start: span 1;
	grid-row-start: span 1;
	box-shadow: 2px 2px 2px 2px ${colors.blackShadow};

	display: flex;
	text-decoration: none;
	flex-direction: column;
	transition: background-color .2s, box-shadow .2s;
	padding-bottom: 10px;
	color: ${colors.black};

	&:hover {
		background-color: ${colors.brightBlue};
		box-shadow: 0px 0px 30px 4px #0ff;
	}

	pointer-events: none;
`;

export const DeleteButton = styled.button`
	align-self: flex-center;
	padding: 0;
	margin: 0;
	font-size: x-large;
	color: ${colors.black};
	pointer-events: auto;
	transition: color .2s;
	&:hover {
		color: ${colors.red};
	}
`;

export const JournalLinkDiv = styled.div`
	background-color: ${colors.darkerWhite};
	border-radius: 10px;
	border: 2px solid ${colors.black};
	height: 100%;
	text-align: center;
	text-decoration: none;
	color: ${colors.black};
	pointer-events: auto;
	align-self: center;
	width: 80%;
`;

export const CreateButton = styled.button`
	width: 100px;
	height: 40px;
	background-color: ${colors.green};
`;
