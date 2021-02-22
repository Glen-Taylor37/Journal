import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import JournalList from './journals/JournalList';
import CreateJournal from './journals/CreateJournal';

const App = () => {
	return (
		<div className="app-container">
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={JournalList} />
				<Route
					path="/journals/create"
					exact
					component={CreateJournal}
				/>
			</BrowserRouter>
		</div>
	);
};

export default App;
