import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Quill from 'quill';
import { BaseContentDiv } from '../../shared/ContentDiv';
import { Button } from '../../shared/Button';
import { getJournal, updateJournal } from '../../../actions';
import colors from '../../shared/colors';
import editor from '../../../apis/editor';
import {
	GridDiv,
	JournalDiv,
	EditorDiv,
	PostButton,
	EntriesDiv
} from './styles';

class JournalShow extends React.Component {
	constructor(props) {
		super(props);
		this.editor = null;
		this.date = new Date();
	}

	componentDidMount() {
		this.props.getJournal(this.props.match.params.id);
	}

	componentDidUpdate() {
		this.addEditor();
	}

	addEditor() {
		if (!this.editor) {
			this.editorRoot = document.querySelector('#editor');
			this.editor = editor(this.editorRoot);

			this.editor.setText(
				`${this.props.journal
					.title}\n${this.date.toLocaleDateString()}\n${this.date.toLocaleTimeString()}`
			);
		}
	}

	onPostClick = () => {
		const { journal } = this.props;
		this.props.updateJournal(journal._id, {
			entries : [
				...journal.entries,
				{
					date    : this.date.toDateString(),
					content : this.editor.getContents()
				}
			]
		});
	};

	onEntryClick = (index) => {
		console.log(index);
	};

	renderEntries() {
		if (!this.props.journal) {
			return null;
		}

		return this.props.journal.entries.map((entry, index) => {
			return (
				<div onClick={() => this.onEntryClick(index)}>
					<a>{entry.date}</a>
				</div>
			);
		});
	}

	render() {
		if (!this.props.journal) {
			return null;
		}

		return (
			<GridDiv>
				<EntriesDiv>
					<h3>Entries</h3>
					{this.renderEntries()}
				</EntriesDiv>
				<JournalDiv>
					<EditorDiv id="editor" />
					<PostButton onClick={this.onPostClick}>Post</PostButton>
				</JournalDiv>
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
