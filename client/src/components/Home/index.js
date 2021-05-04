import React from 'react';
import { connect } from 'react-redux';
import ContentDiv from '@shared/ContentDiv';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxStyle = css`
	padding: 10px 10px 10px 10px;
	align-self: center;
	text-align: center;
	background-color: ${(props) => props.theme.foreground};
	box-shadow: 0px 2px 2px 1px ${(props) => props.theme.foregroundShadow};
`;

export const StyledLink = styled(Link)`
	color: ${(props) => props.theme.link};
	text-decoration: none;

	&:hover {
		color : ${(props) => props.theme.linkHover};
	}
`;

export const Box = styled.div`${BoxStyle};`;

class Home extends React.Component {
	render() {
		return (
			<ContentDiv>
				<Box>
					Welcome.<br />
					<br /> Please <StyledLink to="/signin">login</StyledLink> or{' '}
					<StyledLink to="/signup">signup</StyledLink>.
				</Box>
			</ContentDiv>
		);
	}
}

export default connect(null, {})(Home);
