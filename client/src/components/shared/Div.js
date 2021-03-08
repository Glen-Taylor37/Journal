import styled, { css } from 'styled-components';

export const divStyle = css`
	border-radius: 4px;
	box-shadow: 0px 2px 4px 2px ${(props) => props.theme.foregroundShadow};
`;

const Div = styled.div`
	display: inline;
	color: ${(props) => props.theme.foreText};
	background-color: ${(props) => props.theme.foreground};
	margin: 0;
	padding: 0;
`;

export default Div;
