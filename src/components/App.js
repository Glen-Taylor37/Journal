import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/';
import JournalList from './journals/JournalList/';
import CreateJournal from './journals/CreateJournal';
import history from '../history';
import GlobalStyles from './shared/GlobalStyle';
import GlobalFonts from './shared/fonts';

const AppDiv = styled.div`
	display: flex;
	flex-direction: column;
	font-family: Montserrat;
	height: 100%;
	width: 100%;
`;

const App = () => {
	return (
		<AppDiv>
			<GlobalFonts />
			<GlobalStyles />
			<Router history={history}>
				<Header />
				<Route path="/" exact component={JournalList} />
				<Route
					path="/journals/create"
					exact
					component={CreateJournal}
				/>
			</Router>
		</AppDiv>
	);
};

export default App;
