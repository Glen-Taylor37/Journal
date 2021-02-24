import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import styled from 'styled-components';

import { getJournals } from '../../../actions';
import ContentDiv from '../../shared/ContentDiv';

const Title = styled.h3`
	font-size: 30px;
	margin: 0;
	margin-bottom: 10px;
`;

class JournalList extends React.Component {
	componentDidMount() {
		this.props.getJournals();
	}

	renderJournalList() {
		const renderedJournals = [];
		_.forIn(this.props.journals, (value, key) => {
			renderedJournals.push(<div key={value._id}>{value.formInput}</div>);
		});

		return renderedJournals;
	}

	render() {
		return (
			<ContentDiv>
				<Title>Journal List</Title>
				<br />
				<Link className="ui green button" to="/journals/create">
					Create
				</Link>
				{this.renderJournalList()}
			</ContentDiv>
		);
	}
}

const mapStateToProps = (state) => {
	return { journals: state.journals };
};

export default connect(mapStateToProps, { getJournals })(JournalList);
