import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut, getSettings } from '@actions';
import { NavButton, RedButton } from './styles';
import Icon from '@shared/Icon';

class GoogleSignIn extends React.Component {
	componentDidMount() {
		window.gapi.load('auth2', () => {
			window.gapi.auth2
				.init({
					client_id :
						'299170523315-95a9l5qcn65k3oiatcd488kcvgul6dl9.apps.googleusercontent.com',
					scope     : 'email'
				})
				.then(() => {
					this.authInstance = window.gapi.auth2.getAuthInstance();
					this.onSignInChange(this.authInstance.isSignedIn.get());
					this.authInstance.isSignedIn.listen(() => {
						this.onSignInChange(this.authInstance.isSignedIn.get());
					});
				});
		});
	}

	onSignInClick = async () => {
		if (this.authInstance) {
			await this.authInstance.signIn();
		}
	};

	onSignOutClick = async () => {
		if (this.authInstance) {
			await this.authInstance.signOut();
		}
	};

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
	GoogleSignIn
);
