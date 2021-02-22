import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class JournalList extends React.Component {
	render() {
		return (
			<div className="ui-container content">
				JournalList
				<br />
				<Link className="ui green button" to="/journals/create">
					Create
				</Link>
			</div>
		);
	}
}

export default connect(null, {})(JournalList);
