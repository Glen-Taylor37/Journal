import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContentDiv from '@shared/ContentDiv';

class SignOut extends Component {
	render() {
		return (
			<ContentDiv>
				<h1>Sign Out</h1>
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

export default connect(mapStateToProps, {})(SignOut);
