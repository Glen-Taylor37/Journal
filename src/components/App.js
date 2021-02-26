import React from 'react';
import { Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/';
import JournalList from './journals/JournalList/';
import JournalCreate from './journals/JournalCreate';
import history from '../history';
import GlobalStyles from './shared/GlobalStyle';
import GlobalFonts from './shared/fonts';
import colors from './shared/colors';

const AppDiv = styled.div`
	display: flex;
	flex-direction: column;
	font-family: Montserrat;
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
			<GlobalFonts />
			<GlobalStyles />
			<BackgroundDiv />
			<Router history={history}>
				<Header />
				<Route path="/" exact component={JournalList} />
				<Route
					path="/journals/create"
					exact
					component={JournalCreate}
				/>
			</Router>
		</AppDiv>
	);
};

export default App;
