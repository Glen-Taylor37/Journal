import React from 'react';
import { connect } from 'react-redux';
import ContentDiv from '@shared/ContentDiv';

class Home extends React.Component {
	render() {
		return (
			<ContentDiv>
				<div>Home</div>
			</ContentDiv>
		);
	}
}

export default connect(null, {})(Home);
