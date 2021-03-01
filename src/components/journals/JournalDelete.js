import React from 'react';
import { connect } from 'react-redux';

import Modal from '../shared/Modal';
import { deleteJournal } from '../../actions';
import history from '../../history';

class JournalDelete extends React.Component {
	onDeleteClick = () => {
		this.props.deleteJournal(this.props.journalId);
	};

	renderActions = () => {
		return (
			<React.Fragment>
				<button onClick={this.onDeleteClick}>Delete</button>
				<button onClick={this.props.onDismiss}>Cancel</button>
			</React.Fragment>
		);
	};

	render() {
		if (!this.props.isOpen) {
			return null;
		}

		return (
			<Modal
				onDismiss={
					this.props.onDismiss ? (
						this.props.onDismiss
					) : (
						() => history.push('/')
					)
				}
				title="Delete Journal"
				content={this.renderActions()}
				isOpen={
					this.props.isOpen !== undefined ? this.props.isOpen : true
				}
			/>
		);
	}
}

export default connect(null, { deleteJournal })(JournalDelete);
