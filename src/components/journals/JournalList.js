import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { getJournals } from '../../actions';

class JournalList extends React.Component {
	componentDidMount() {
		this.props.getJournals();
	}

	renderJournalList() {
		const renderedJournals = [];
		_.forIn(this.props.journals, (value, key) => {
			renderedJournals.push(<div>{value.formInput}</div>);
		});

		return renderedJournals;
	}

	render() {
		return (
			<div className="ui-container content">
				JournalList
				<br />
				<Link className="ui green button" to="/journals/create">
					Create
				</Link>
				{this.renderJournalList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { journals: state.journals };
};

export default connect(mapStateToProps, { getJournals })(JournalList);
