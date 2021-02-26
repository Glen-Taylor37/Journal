import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { getJournals } from '../../../actions';
import ContentDiv from '../../shared/ContentDiv';
import { Title, JournalListDiv, JournalDiv, CreateButton } from './styles';
import JournalCreate from '../JournalCreate';

class JournalList extends React.Component {
	state = { modalOpen: false };

	componentDidMount() {
		this.props.getJournals();
	}

	renderJournalList() {
		const renderedJournals = [];
		_.forEach(this.props.journals, (journal) => {
			if (journal.userId !== this.props.userId) {
				return null;
			}

			renderedJournals.push(
				<JournalDiv as={Link} to={`/journals/${journal._id}`} key={journal._id}>
					<h3>{journal.title}</h3>
					<div>{journal.date}</div>
				</JournalDiv>
			);
		});

		return renderedJournals;
	}

	onCreateClick = () => {
		this.setState({ modalOpen: true });
	};

	closeModal = () => {
		this.setState({ modalOpen: false });
	};

	render() {
		return (
			<ContentDiv>
				<Title>Journal List</Title>
				<br />
				<CreateButton onClick={this.onCreateClick}>Create</CreateButton>
				<JournalCreate
					onDismiss={this.closeModal}
					onSubmit={this.closeModal}
					isOpen={this.state.modalOpen}
				/>
				<JournalListDiv>{this.renderJournalList()}</JournalListDiv>
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return { journals: state.journals, userId: state.user.googleId };
};

export default connect(mapStateToProps, { getJournals })(JournalList);
