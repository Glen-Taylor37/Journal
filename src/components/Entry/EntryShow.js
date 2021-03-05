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

class EntryShow extends React.Component {
	constructor(props) {
		super(props);
		this.modules = {
			toolbar : toolbarOptions
		};

		this.state = { text: '' };
	}

	componentDidMount() {
		if (this.props.readOnly && this.state.text !== this.props.text) {
			this.setState({ text: this.props.text });
		}
	}

	componentDidUpdate() {
		console.log('props.text: ', this.props.text);
		if (this.props.readOnly && this.state.text !== this.props.text) {
			this.setState({ text: this.props.text });
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
		console.log('value to render: ', this.state.text);
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

export default EntryShow;
