import React from 'react';

import { JournalDiv, PostButton, EditorDiv } from './styles';

const toolbarOptions = [
	[ 'bold', 'italic', 'underline', 'strike' ], // toggled buttons
	[ 'blockquote', 'code-block' ],

	[ { header: 1 }, { header: 2 } ], // custom button values
	[ { list: 'ordered' }, { list: 'bullet' } ],
	[ { script: 'sub' }, { script: 'super' } ], // superscript/subscript
	[ { indent: '-1' }, { indent: '+1' } ], // outdent/indent
	[ { direction: 'rtl' } ], // text direction

	[ { size: [ 'small', false, 'large', 'huge' ] } ], // custom dropdown
	[ { header: [ 1, 2, 3, 4, 5, 6, false ] } ],

	[ { color: [] }, { background: [] } ], // dropdown with defaults from theme
	[ { font: [] } ],
	[ { align: [] } ],
	[ 'clean' ] // remove formatting button
];

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
			<JournalDiv>
				<EditorDiv
					theme={this.props.readOnly ? 'bubble' : 'snow'}
					value={this.state.text}
					onChange={this.handleChange}
					modules={this.modules}
					readOnly={this.props.readOnly}
				/>
				{this.renderPostButton()}
			</JournalDiv>
		);
	}
}

export default EntryShow;
