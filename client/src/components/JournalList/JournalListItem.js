import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJournal } from '@actions';

import {
	JournalDiv,
	JournalLinkDiv,
	DeleteButton,
	JournalTitle,
	BannerDiv,
	ViewButton,
	DetailDiv
} from './styles';

class JournalListItem extends React.Component {
	onDeleteClick = (event) => {
		event.stopPropagation();
		this.props.deleteJournal(this.props.journal.id);
	};

	render() {
		const { journal } = this.props;

		return (
			<JournalDiv>
				<BannerDiv />
				<JournalLinkDiv
					as={Link}
					to={`/journals/${journal.id}`}
					onClick={this.props.onClick}
				>
					<JournalTitle>{journal.title}</JournalTitle>
					<DetailDiv>
						Entries: {`${journal.entries.length}`}
					</DetailDiv>
					<DetailDiv>{journal.date}</DetailDiv>
					<ViewButton>View</ViewButton>
				</JournalLinkDiv>
				<DeleteButton onClick={this.onDeleteClick}>Delete</DeleteButton>
			</JournalDiv>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { journal: state.journals[ownProps.journalId] };
};

export default connect(mapStateToProps, { deleteJournal })(JournalListItem);
