import React from 'react';
import { connect } from 'react-redux';

import Modal from '../shared/Modal';
import history from '../../history';
import { createJournal } from '../../actions';

class JournalCreate extends React.Component {
	state = { title: '' };

	constructor(props) {
		super(props);
	}

	onSubmit = (event) => {
		event.preventDefault();

		this.props.createJournal({ title: this.state.title });

		if (this.props.onSubmit) {
			this.props.onSubmit();
		}
	};

	renderForm = () => {
		return (
			<form onSubmit={this.onSubmit}>
				<input
					name="title"
					placeholder="Journal name"
					value={this.state.title}
					onChange={({ target }) => {
						this.setState({ title: target.value });
					}}
					autoComplete="off"
				/>
				<input
					className="ui button green"
					type="submit"
					value="Create"
				/>
			</form>
		);
	};

	render() {
		return (
			<Modal
				onDismiss={
					this.props.onDismiss ? (
						this.props.onDismiss
					) : (
						() => history.push('/')
					)
				}
				title="Create Journal"
				content={this.renderForm()}
				ref={this.props.modalRef}
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
