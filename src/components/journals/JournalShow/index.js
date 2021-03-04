import React from 'react';
import { connect } from 'react-redux';

import { getJournal, updateJournal } from '@actions';
import EntryShow from './EntryShow';
import { GridDiv } from './styles';

import EntriesList from './EntriesList';

class JournalShow extends React.Component {
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
		this.props.updateJournal(journal._id, {
			entries : [
				...journal.entries,
				{
					date : this.date.toDateString(),
					text
				}
			]
		});
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
				<EntriesList
					onEntryClick={this.onEntryClick}
					journal={journal}
				/>
				<EntryShow
					journalId={journal._id}
					text={entry ? entry.text : ''}
					onPostClick={this.onPostClick}
					readOnly={entry !== undefined}
				/>
			</GridDiv>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { journal: state.journals[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getJournal, updateJournal })(
	JournalShow
);
