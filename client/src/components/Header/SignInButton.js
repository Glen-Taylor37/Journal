import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut, getSettings } from '@actions';
import { NavButton, RedButton } from './styles';
import Icon from '@shared/Icon';

class SignInButton extends React.Component {
	componentDidMount() {}

	onSignInClick = async () => {};

	onSignOutClick = async () => {};

	onSignInChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn({
				idToken : this.authInstance.currentUser.get().getAuthResponse()
					.id_token,
				profile : this.authInstance.currentUser.get().getBasicProfile()
			});
			this.props.getSettings();
		} else {
			this.props.signOut();
		}
	};

	renderSignInButton() {
		if (this.props.user.signedIn) {
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
	return { user: state.user };
};

export default connect(mapStateToProps, { signIn, signOut, getSettings })(
	SignInButton
);
