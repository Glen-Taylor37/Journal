import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header/';
import Home from './Home/';
import SignUp from './auth/SignUp';
import SignOut from './auth/SignOut';
import SignIn from './auth/SignIn';
import JournalList from './JournalList';
import JournalCreate from './JournalCreate';
import JournalView from './JournalView';
import history from '../history';
import GlobalStyles from '@shared/GlobalStyle';
import { lightTheme, darkTheme } from '@shared/colors';
import { getSettings } from '@actions';

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

class App extends React.Component {
	componentDidMount() {
		this.props.getSettings();
	}
	render() {
		return (
			<ThemeProvider theme={darkTheme}>
				<AppDiv>
					<GlobalStyles />
					<BackgroundDiv />
					<Router history={history}>
						<Header />
						<Switch>
							<Route path="/signup" exact component={SignUp} />
							<Route path="/signout" exact component={SignOut} />
							<Route path="/signin" exact component={SignIn} />
							<Route
								path="/journals"
								exact
								component={JournalList}
							/>
							<Route path="/" exact component={Home} />
							<Route
								path="/journals/create"
								exact
								component={JournalCreate}
							/>
							<Route
								path="/journals/:id"
								exact
								component={JournalView}
							/>
							<Route
								path="/journals/:id/entries/:entryId"
								exact
								component={JournalView}
							/>
						</Switch>
					</Router>
				</AppDiv>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = (state) => {
	return { settings: state.settings };
};

export default connect(mapStateToProps, { getSettings })(App);
