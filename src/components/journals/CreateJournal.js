import React from 'react';
import Modal from '../Modal';

class CreateJournal extends React.Component {
	onSubmit = (event) => {
		event.preventDefault();
	};

	renderForm = () => {
		return (
			<div className="content">
				<h3>Create Journal</h3>
				<form onSubmit={this.onSubmit}>
					<input name="title" placeholder="Journal name" />
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

export default CreateJournal;
