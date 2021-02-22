import React from 'react';

const CreateJournal = () => {
	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="ui-container content">
			<h3>Create Journal</h3>
			<form onSubmit={onSubmit}>
				<input name="title" placeholder="Journal" />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default CreateJournal;
