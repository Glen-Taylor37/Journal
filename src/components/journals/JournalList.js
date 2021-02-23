import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import _ from 'lodash';
import { getJournals } from '../../actions';

const Title = styled.h3`
	font-size: 30px;
	margin-bottom: 10px;
`;

class JournalList extends React.Component {
	componentDidMount() {
		this.props.getJournals();
	}

	renderJournalList() {
		const renderedJournals = [];
		_.forIn(this.props.journals, (value, key) => {
			renderedJournals.push(<div>{value.formInput}</div>);
		});

		return renderedJournals;
	}

	render() {
		return (
			<div className="ui-container content">
				<Title>Journal List</Title>
				<br />
				<Link className="ui green button" to="/journals/create">
					Create
				</Link>
				{this.renderJournalList()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { journals: state.journals };
};

export default connect(mapStateToProps, { getJournals })(JournalList);
