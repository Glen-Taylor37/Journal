import React from 'react';

import { EntriesTitleDiv, EntriesDiv, EntryDiv, EntryLink } from './styles';

const EntryList = (props) => {
	const { journal } = props;

	const renderList = () => {
		if (!journal) {
			return null;
		}

		console.log('list to render: ', journal.entries);
		return journal.entries.map((entry, index) => {
			return (
				<EntryDiv key={index}>
					<EntryLink to={`/journals/${journal.id}/entries/${index}`}>
						{new Date(entry.createdAt).toDateString()}
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
				<EntryLink to={`/journals/${journal.id}`}>New..</EntryLink>
			</EntryDiv>
		</EntriesDiv>
	);
};

export default EntryList;
