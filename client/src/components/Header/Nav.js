import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Settings from './Settings';
import GoogleSignIn from './GoogleSignIn';
import {
	OuterNavDiv,
	NavDiv,
	NavButton,
	InnerNavDiv,
	Vl,
	RedButton
} from './styles';

import Div from '@shared/Div';
import Icon from '@shared/Icon';

const Nav = (props) => {
	const renderName = () => {
		if (props.name) {
			return (
				<InnerNavDiv>
					<Icon className="fas fa-user" />
					<Div>{props.name}</Div>
					<Vl />
				</InnerNavDiv>
			);
		} else return null;
	};

	const renderSignInButton = () => {
		if (props.signedIn) {
			return (
				<RedButton as={Link} to="/signout">
					<Icon className="fas fa-sign-out-alt" />
					Log Out
				</RedButton>
			);
		} else {
			return (
				<NavButton as={Link} to="/signin">
					<Icon className="fas fa-sign-in-alt" />
					Log In
				</NavButton>
			);
		}
	};

	const renderSignUpButton = () => {
		if (!props.signedIn) {
			return (
				<NavButton as={Link} to="/signup">
					<Icon className="fas fa-user-plus" />
					Sign Up
				</NavButton>
			);
		} else {
			return null;
		}
	};
	return (
		<OuterNavDiv>
			<NavDiv>
				<InnerNavDiv>
					{renderName()}
					<NavButton as={Link} to="/journals">
						Journals
					</NavButton>
				</InnerNavDiv>
				<InnerNavDiv>
					<Settings />
					{renderSignInButton()}
					{renderSignUpButton()}
				</InnerNavDiv>
			</NavDiv>
		</OuterNavDiv>
	);
};

const mapStateToProps = ({ user }) => {
	return { name: user.name, signedIn: user.signedIn };
};

export default connect(mapStateToProps, {})(Nav);
