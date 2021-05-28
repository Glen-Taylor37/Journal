import React from 'react';

import { EntriesTitleDiv, EntriesDiv, EntryDiv, EntryLink } from './styles';

const EntryList = (props) => {
	const { journal } = props;

	const renderList = () => {
		if (!journal) {
			return null;
		}

		return journal.entries.map((entry, index) => {
			return (
				<EntryDiv key={index}>
					<EntryLink
						onClick={() =>
							props.onEntryClick(false /* isNewEntry */)}
						to={`/journals/${journal.id}/entries/${index}`}
					>
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
				<EntryLink
					onClick={() => props.onEntryClick(true /* isNewEntry */)}
					to={`/journals/${journal.id}`}
				>
					New..
				</EntryLink>
			</EntryDiv>
		</EntriesDiv>
	);
};

export default EntryList;
