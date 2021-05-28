import React from 'react';
import { connect } from 'react-redux';

import { getJournal, createEntry } from '@actions';
import EntryEditor from './EntryEditor';
import EntryList from './EntryList';
import { GridDiv } from './styles';
import requireAuth from '../auth/requireAuth';

class JournalView extends React.Component {
	state = { viewNewEntry: true };

	constructor(props) {
		super(props);
		this.editor = null;
		this.date = new Date();
	}

	componentDidMount() {
		this.props.getJournal(this.props.match.params.id);
	}

	onPostClick = (text) => {
		const { journal } = this.props;
		this.props.createEntry(journal.id, {
			text
		});
	};

	onEntryClick = (isNewEntry) => {
		console.log('entry clickin');
		this.setState({ viewNewEntry: isNewEntry });
		if (isNewEntry) {
		}
	};

	render() {
		if (!this.props.journal) {
			return null;
		}

		const { journal } = this.props;
		const entry = journal.entries[this.props.match.params.entryId];
		console.log('entry: ', entry);

		return (
			<GridDiv>
				<EntryList onEntryClick={this.onEntryClick} journal={journal} />
				<EntryEditor
					journalId={journal.id}
					initialText={entry ? entry.content : ''}
					onPostClick={this.onPostClick}
					readOnly={!this.state.isNewEntry && entry !== undefined}
				/>
			</GridDiv>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { journal: state.journals[ownProps.match.params.id] };
};

export default requireAuth(
	connect(mapStateToProps, { getJournal, createEntry })(JournalView)
);
