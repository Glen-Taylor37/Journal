import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Quill from 'quill';
import ContentDiv from '../shared/ContentDiv';
import { getJournals } from '../../actions';

const JournalDiv = styled.div``;
const EditorDiv = styled.div`
	width: 100%;
	height: 100%;
`;

class JournalShow extends React.Component {
	constructor(props) {
		super(props);
		this.editor = null;
	}

	componentDidMount() {
		this.props.getJournals();
	}

	componentDidUpdate() {
		this.addEditor();
	}

	addEditor() {
		if (!this.editor) {
			this.editorRoot = document.querySelector('#editor');
			const options = {
				debug       : 'info',
				placeholder : 'Compose an epic...',
				readOnly    : false,
				theme       : 'snow',
				bounds      : this.editorRoot
			};
			this.editor = new Quill(this.editorRoot, options);
		}
	}

	render() {
		if (!this.props.journal) {
			return null;
		}

		return (
			<ContentDiv>
				<JournalDiv>
					{this.props.journal.title}
					<EditorDiv id="editor" />
				</JournalDiv>
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { journal: state.journals[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getJournals })(JournalShow);
