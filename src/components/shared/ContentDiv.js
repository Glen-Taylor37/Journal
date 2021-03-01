import styled from 'styled-components';
import colors from './colors';

const ContentDiv = styled.div`
	padding-top: 40px;
	padding-left: 40px;
	padding-right: 40px;
	background-color: ${colors.darkerWhite};
	height: 100%;
	display: flex;
	width: 70%;
	flex-direction: column;
	margin-top: 100px;
	align-self: center;
`;

export const BaseContentDiv = styled(ContentDiv)`
	padding-top: 40px;
	padding-left: 40px;
	padding-right: 40px;
	background-color: ${colors.darkerWhite};
	height: 100%;
	width: 70%;
	margin-top: 100px;
	align-self: center;
`;

export default ContentDiv;
