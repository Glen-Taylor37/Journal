import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header';
import JournalList from './journals/JournalList';
import CreateJournal from './journals/CreateJournal';
import history from '../history';
import AppStyles from './shared/styles';

const AppContainer = styled.div`
	font-size: 13px;
	font-family: ;
`;

const App = () => {
	return (
		<div className="app-container">
			<AppStyles />
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
