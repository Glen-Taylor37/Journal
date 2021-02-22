import React from 'react';
import { connect } from 'react-redux';

import Modal from '../Modal';
import { createStream } from '../../actions';

class CreateJournal extends React.Component {
	state = { title: '' };

	onSubmit = (event) => {
		event.preventDefault();
		this.props.createStream(this.state.title);
	};

	renderForm = () => {
		return (
			<div className="content">
				<h3>Create Journal</h3>
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
			</div>
		);
	};

	render() {
		return <Modal content={this.renderForm()} />;
	}
}

const mapStateToProps = (state) => {
	return { userId: state.user.googleId };
};

export default connect(mapStateToProps, { createStream })(CreateJournal);
