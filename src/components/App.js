import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/';
import JournalList from './JournalList';
import JournalCreate from './JournalList/JournalCreate';
import JournalShow from './JournalShow';
import history from '../history';
import GlobalStyles from '@shared/GlobalStyle';
import colors from '@colors';

const AppDiv = styled.div`
	display: flex;
	flex-direction: column;
	font-family: 'Roboto', sans-serif;
	height: 100%;
	width: 100%;
`;

const BackgroundDiv = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	background-color: ${colors.darkerWhite};
	z-index: -1;
`;

const App = () => {
	return (
		<AppDiv>
			<GlobalStyles />
			<BackgroundDiv />
			<Router history={history}>
				<Header />
				<Switch>
					<Route path="/" exact component={JournalList} />
					<Route
						path="/journals/create"
						exact
						component={JournalCreate}
					/>
					<Route path="/journals/:id" exact component={JournalShow} />
					<Route
						path="/journals/:id/:entryId"
						exact
						component={JournalShow}
					/>
				</Switch>
			</Router>
		</AppDiv>
	);
};

export default App;
