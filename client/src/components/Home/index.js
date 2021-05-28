import React from 'react';
import { connect } from 'react-redux';
import ContentDiv from '@shared/ContentDiv';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { getJournals } from '@actions';

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
	componentDidMount() {
		this.props.getJournals();
	}

	renderHomeContent() {
		const { journals } = this.props;

		// give user option to sign-in or sign-up if no credentials provided
		if (!this.props.token) {
			return (
				<Box>
					Welcome.<br />
					<br /> Please <StyledLink to="/signin">login</StyledLink> or{' '}
					<StyledLink to="/signup">signup</StyledLink>.
				</Box>
			);
		}

		// if user signed in, show number of journals and entries
		let journalCount = 0;
		let entryCount = 0;
		for (const index in journals) {
			journalCount++;
			if (journals[index].entries) {
				journals[index].entries.forEach((entry) => entryCount++);
			}
		}

		return (
			<React.Fragment>
				<Box>
					Welcome.<br />
					<br />
					{`Journals: ${journalCount}`}
					<br />
					{`Entries: ${entryCount}`}
				</Box>
			</React.Fragment>
		);
	}

	render() {
		return <ContentDiv>{this.renderHomeContent()}</ContentDiv>;
	}
}

const mapStateToProps = (state) => {
	return { journals: state.journals, token: state.user.token };
};

export default connect(mapStateToProps, { getJournals })(Home);
