import React from 'react';
import { Router, Route } from 'react-router-dom';

import Header from './Header';
import JournalList from './journals/JournalList';
import CreateJournal from './journals/CreateJournal';

import history from '../history';

const App = () => {
	return (
		<div className="app-container">
			<Router history={history}>
				<Header />
				<Route path="/" exact component={JournalList} />
				<Route
					path="/journals/create"
					exact
					component={CreateJournal}
				/>
			</Router>
		</div>
	);
};

export default App;
