import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '@actions';
import ContentDiv from '@shared/ContentDiv';
import { Box } from './styles';

class SignOut extends Component {
	componentDidMount() {
		this.props.signOut();
	}

	render() {
		return (
			<ContentDiv>
				<Box>Thanks for stopping by.</Box>
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, { signOut })(SignOut);
