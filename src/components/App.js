import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import JournalList from './journals/JournalList';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Route path="/" component={JournalList} />
			</BrowserRouter>
		</div>
	);
};

export default App;
