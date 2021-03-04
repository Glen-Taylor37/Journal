import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
	JournalDiv,
	JournalLinkDiv,
	DeleteButton,
	JournalTitle,
	BannerDiv,
	ViewButton,
	DetailDiv
} from './styles';
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
				<BannerDiv />
				<JournalLinkDiv
					as={Link}
					to={`/journals/${journal._id}`}
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

export default connect(mapStateToProps, {})(JournalListItem);
