import React from 'react';
import { connect } from 'react-redux';
import Title from './Title';

const Header = () => {
	return (
		<div className="header">
			<Title />
			<div className="nav">
				<button className="ui button">Journals</button>
				<div className="nav-right">
					<button className="ui button">
						<i className="fas fa-cog" />Settings
					</button>
					<button className="ui button">
						<i className="fab fa-google" /> Sign in
					</button>
				</div>
			</div>
		</div>
	);
};

export default connect(null, {})(Header);
