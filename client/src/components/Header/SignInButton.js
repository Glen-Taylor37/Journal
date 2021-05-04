import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut, getSettings } from '@actions';
import { NavButton, RedButton } from './styles';
import Icon from '@shared/Icon';

class SignInButton extends React.Component {
	componentDidMount() {}

	onSignInClick = async () => {};

	onSignOutClick = async () => {};

	renderSignInButton() {
		if (this.props.user.token) {
			return (
				<RedButton onClick={this.onSignOutClick}>
					<Icon className="fab fa-google" /> Log Out
				</RedButton>
			);
		} else {
			return (
				<NavButton onClick={this.onSignInClick}>
					<Icon className="fab fa-google" /> Log In
				</NavButton>
			);
		}
	}

	render() {
		return <React.Fragment>{this.renderSignInButton()}</React.Fragment>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { token: state.user.token };
};

export default connect(mapStateToProps, { signIn, signOut, getSettings })(
	SignInButton
);
