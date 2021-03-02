import React from 'react';
import { connect } from 'react-redux';

import { getJournal, updateJournal } from '../../../actions';
import editor, { readableEditor } from '../../../apis/editor';
import EntryShow from './EntryShow';
import {
	GridDiv,
	JournalDiv,
	EditorDiv,
	PostButton,
	EntriesDiv
} from './styles';

import EntriesList from './EntriesList';

class JournalShow extends React.Component {
	//state = { activeEntryId: null };

	constructor(props) {
		super(props);
		this.editor = null;
		this.date = new Date();
	}

	componentDidMount() {
		this.props.getJournal(this.props.match.params.id);
	}

	componentDidUpdate() {
		//this.addEditor();
	}

	addEditor() {
		if (!this.editor) {
			this.editorRoot = document.querySelector('#editor');
			if (!this.state.readOnly) {
				this.editor = editor(this.editorRoot);

				this.editor.setText(
					`${this.props.journal
						.title}\n${this.date.toLocaleDateString()}\n${this.date.toLocaleTimeString()}`
				);
			} else {
			}
		}
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

	onEntryClick = (index) => {
		//this.setState({ activeEntryId: index });
	};

	renderEditor() {}

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
