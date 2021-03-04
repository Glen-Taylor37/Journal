import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Modal from '../shared/Modal';
import history from '../../history';
import { createJournal } from '../../actions';
import { buttonStyle } from '../shared/Button';
import colors from '../shared/colors';

const SubmitButton = styled.input`
	${buttonStyle};
	display: inline;
	margin-left: 5px;
	background-color: ${colors.brightBlue};
	color: ${colors.white};
`;

const StyledInput = styled.input`
	height: 2em;
	border-radius: 4px;
	border: inset;
	outline: none;
`;

const Form = styled.form``;

class JournalCreate extends React.Component {
	state = { title: '' };

	onSubmit = (event) => {
		event.preventDefault();

		this.props.createJournal({ title: this.state.title });

		if (this.props.onSubmit) {
			this.props.onSubmit();
		}

		this.setState({ title: '' });
	};

	onDismiss = () => {
		this.props.onDismiss ? this.props.onDismiss() : history.push('/');
		this.setState({ title: '' });
	};

	renderForm = () => {
		return (
			<form onSubmit={this.onSubmit}>
				<StyledInput
					name="title"
					placeholder="Journal name"
					value={this.state.title}
					onChange={({ target }) => {
						this.setState({ title: target.value });
					}}
					autoComplete="off"
				/>
				<SubmitButton type="submit" value="Create" />
			</form>
		);
	};

	render() {
		return (
			<Modal
				onDismiss={this.onDismiss}
				title="Create Journal"
				content={this.renderForm()}
				isOpen={
					this.props.isOpen !== undefined ? this.props.isOpen : true
				}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return { userId: state.user.googleId };
};

export default connect(mapStateToProps, { createJournal })(JournalCreate);
