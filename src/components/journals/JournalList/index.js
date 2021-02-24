import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { getJournals } from '../../../actions';
import ContentDiv from '../../shared/ContentDiv';
import { Title, JournalListDiv, JournalDiv } from './styles';

class JournalList extends React.Component {
	componentDidMount() {
		this.props.getJournals();
	}

	renderJournalList() {
		const renderedJournals = [];
		_.forIn(this.props.journals, (value, key) => {
			renderedJournals.push(
				<JournalDiv key={value._id}>{value.title}</JournalDiv>
			);
		});

		return renderedJournals;
	}

	render() {
		return (
			<ContentDiv>
				<Title>Journal List</Title>
				<br />
				<Link className="ui green button" to="/journals/create">
					Create
				</Link>
				<JournalListDiv>{this.renderJournalList()}</JournalListDiv>
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return { journals: state.journals };
};

export default connect(mapStateToProps, { getJournals })(JournalList);
