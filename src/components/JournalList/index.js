import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getJournals } from '@actions';
import ContentDiv from '@shared/ContentDiv';
import {
	JournalListDiv,
	CreateButton,
	EmptyJournalDiv,
	OutlineDiv
} from './styles';
import JournalCreate from './JournalCreate';
import JournalDelete from './JournalDelete';
import JournalListItem from './JournalListItem';

class JournalList extends React.Component {
	state = {
		createModalOpen : false,
		deleteModalOpen : false,
		selectedJournal : null
	};

	componentDidMount() {
		this.props.getJournals();
	}

	renderJournalList() {
		const renderedJournals = [];
		_.forEach(this.props.journals, (journal) => {
			if (journal.userId !== this.props.userId) {
				return null;
			}

			renderedJournals.push(
				<JournalListItem
					key={journal._id}
					onClick={this.onListItemClick}
					onDeleteClick={this.onDeleteClick}
					journalId={journal._id}
				/>
			);
		});

		return renderedJournals;
	}

	onListItemClick = (selectedJournal) => {
		console.log(selectedJournal);
		this.setState({ selectedJournal });
	};

	onCreateClick = () => {
		this.setState({ createModalOpen: true });
	};

	closeCreateModal = () => {
		this.setState({ createModalOpen: false });
	};

	onDeleteClick = (journalId) => {
		this.setState({ deleteModalOpen: true });
	};

	closeDeleteModal = () => {
		this.setState({ deleteModalOpen: false });
	};

	render() {
		return (
			<ContentDiv>
				<JournalCreate
					onDismiss={this.closeCreateModal}
					onSubmit={this.closeCreateModal}
					isOpen={this.state.createModalOpen}
				/>
				<JournalDelete
					onDismiss={this.closeDeleteModal}
					onSubmit={this.closeDeleteModal}
					isOpen={this.state.deleteModalOpen}
					journalId={
						this.state.selectedJournal ? (
							this.state.selectedJournal._id
						) : null
					}
				/>

				<JournalListDiv>
					{this.renderJournalList()}
					<EmptyJournalDiv>
						<OutlineDiv />
						<CreateButton onClick={this.onCreateClick}>
							Create
						</CreateButton>
					</EmptyJournalDiv>
				</JournalListDiv>
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return { journals: state.journals, userId: state.user.googleId };
};

export default connect(mapStateToProps, { getJournals })(JournalList);
