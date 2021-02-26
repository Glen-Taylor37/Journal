import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ContentDiv from '../shared/ContentDiv';

import { getJournals } from '../../actions';

const JournalDiv = styled.div``;

class JournalShow extends React.Component {
	render() {
		if (!this.props.journal) {
			return null;
		}

		return (
			<ContentDiv>
				<JournalDiv>{this.props.journal.title}</JournalDiv>
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { journal: state.journals[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getJournals })(JournalShow);
