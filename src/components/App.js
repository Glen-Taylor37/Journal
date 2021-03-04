import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header/';
import JournalList from './JournalList';
import JournalCreate from './JournalCreate';
import Entry from './Entry';
import history from '../history';
import GlobalStyles from '@shared/GlobalStyle';
import { lightTheme, darkTheme } from '@colors';

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
	background-color: ${(props) => props.theme.background};
	z-index: -1;
`;

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
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
						<Route path="/journals/:id" exact component={Entry} />
						<Route
							path="/journals/:id/:entryId"
							exact
							component={Entry}
						/>
					</Switch>
				</Router>
			</AppDiv>
		</ThemeProvider>
	);
};

export default App;
