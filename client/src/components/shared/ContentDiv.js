import styled from 'styled-components';

const ContentDiv = styled.div`
	padding-top: 40px;
	padding-left: 40px;
	padding-right: 40px;
	background-color: ${(props) => props.theme.background};
	height: 100%;
	display: flex;
	width: 50%;
	flex-direction: column;
	margin-top: 100px;
	align-self: center;
	color: ${(props) => props.theme.foreText};
`;

export const BaseContentDiv = styled(ContentDiv)`
	padding-top: 40px;
	padding-left: 40px;
	padding-right: 40px;
	background-color: ${(props) => props.theme.background};
	height: 100%;
	width: 50%;
	margin-top: 100px;
	align-self: center;
`;

export default ContentDiv;
