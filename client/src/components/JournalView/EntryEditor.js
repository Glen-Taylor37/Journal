import React from 'react';

import { JournalDiv, PostButton, StyledQuill } from './styles';
import { toolbarOptions } from '@apis/editor';
import styled from 'styled-components';

const EmptyDiv = styled.div`
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
`;

class EntryEditor extends React.Component {
	state = { text: '', initialText: '' };

	constructor(props) {
		super(props);
		this.modules = {
			toolbar : toolbarOptions
		};
	}

	componentDidMount() {
		this.setState({
			text        : this.props.initialText,
			initialText : this.props.initialText
		});
	}

	componentDidUpdate() {
		/* If a new entry is selected we must update the text or clear it.
		Compare using an initial value forwarded by the parent to determine if dirty */
		if (this.state.initialText !== this.props.initialText) {
			this.setState({
				text        : this.props.initialText,
				initialText : this.props.initialText
			});
		}
	}

	handleChange = (value) => {
		this.setState({ text: value });
	};

	renderPostButton = () => {
		if (this.props.readOnly) {
			return null;
		}

		return (
			<PostButton onClick={() => this.props.onPostClick(this.state.text)}>
				Post
			</PostButton>
		);
	};

	render() {
		return (
			<EmptyDiv>
				<JournalDiv>
					<StyledQuill
						theme={this.props.readOnly ? 'bubble' : 'snow'}
						value={this.state.text}
						onChange={this.handleChange}
						modules={this.modules}
						readOnly={this.props.readOnly}
					/>
				</JournalDiv>
				{this.renderPostButton()}
			</EmptyDiv>
		);
	}
}

export default EntryEditor;
