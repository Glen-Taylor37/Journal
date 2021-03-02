import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EntriesDiv = styled.div`
	height: 100%;
	width: 100%;
`;

const StyledLink = styled(Link)`

`;

const StyledH3 = styled.h3`margin-top: 0;`;

const EntriesList = (props) => {
	const { journal } = props;

	const renderList = () => {
		if (!journal) {
			return null;
		}

		return journal.entries.map((entry, index) => {
			return (
				<div key={index} onClick={() => props.onEntryClick(index)}>
					<StyledLink to={`/journals/${journal._id}/${index}`}>
						{entry.date}
					</StyledLink>
				</div>
			);
		});
	};

	return (
		<EntriesDiv>
			<StyledH3>Entries</StyledH3>
			{renderList()}
			<div>
				<StyledLink to={`/journals/${journal._id}`}>New..</StyledLink>
			</div>
		</EntriesDiv>
	);
};

export default EntriesList;
