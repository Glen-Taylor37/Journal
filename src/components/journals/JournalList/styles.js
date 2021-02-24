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
	grid-template-rows: repeat(4, 25%);
	grid-template-columns: repeat(4, 25%);
	flex-grow: 1;
`;

export const JournalDiv = styled.div`
	background-color: ${colors.blue};
	border-radius: 10px;
	margin: 10px;
	align-text: center;
    grid-column-start: span 1
    grid-row-start: span 1
`;
