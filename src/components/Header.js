import React from 'react';
import { connect } from 'react-redux';
import Title from './Title';
import GoogleSignIn from './GoogleSignIn';

const Header = (props) => {
	const renderName = () => {
		if (props.name) {
			return (
				<div className="user">
					<i className="fas fa-user" />
					{props.name}
					<div className="vl" />
				</div>
			);
		} else return null;
	};

	return (
		<div className="header ui-container">
			<Title />
			<div className="nav">
				{renderName()}
				<button className="ui button transparent">Journals</button>
				<div className="nav-right">
					<button className="ui transparent button">
						<i className="fas fa-cog" />Settings
					</button>
					<GoogleSignIn />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ user }) => {
	return { name: user.name };
};

export default connect(mapStateToProps, {})(Header);
