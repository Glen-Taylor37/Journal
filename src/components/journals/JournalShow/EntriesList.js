import React from 'react';

import { EntriesTitleDiv, EntriesDiv, EntryDiv, EntryLink } from './styles';

const EntriesList = (props) => {
	const { journal } = props;

	const renderList = () => {
		if (!journal) {
			return null;
		}

		return journal.entries.map((entry, index) => {
			return (
				<EntryDiv key={index} onClick={() => props.onEntryClick(index)}>
					<EntryLink to={`/journals/${journal._id}/${index}`}>
						{entry.date}
					</EntryLink>
				</EntryDiv>
			);
		});
	};

	return (
		<EntriesDiv>
			<EntriesTitleDiv>Entries</EntriesTitleDiv>
			{renderList()}
			<EntryDiv>
				<EntryLink to={`/journals/${journal._id}`}>New..</EntryLink>
			</EntryDiv>
		</EntriesDiv>
	);
};

export default EntriesList;
