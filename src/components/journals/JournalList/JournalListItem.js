import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { JournalDiv, JournalLinkDiv, DeleteButton } from './styles';
import JournalDelete from '../JournalDelete';

class JournalListItem extends React.Component {
	onDeleteClick = (event) => {
		console.log(event);
		event.stopPropagation();
	};

	render() {
		const { journal } = this.props;

		return (
			<JournalDiv>
				<JournalLinkDiv
					as={Link}
					to={`/journals/${journal._id}`}
					onClick={this.props.onClick}
				>
					<h3>{journal.title}</h3>
					<div>{journal.date}</div>
				</JournalLinkDiv>
				<DeleteButton onClick={this.onDeleteClick} />
			</JournalDiv>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { journal: state.journals[ownProps.journalId] };
};

export default connect(mapStateToProps, {})(JournalListItem);
