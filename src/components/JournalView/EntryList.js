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

export default EntryList;
