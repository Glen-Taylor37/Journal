import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions';
import { Button, RedButton } from './styles';

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
			this.props.signIn(
				this.authInstance.currentUser.get().getBasicProfile()
			);
		} else {
			this.props.signOut();
		}
	};

	renderSignInButton() {
		if (this.props.user.signedIn) {
			return (
				<RedButton onClick={this.onSignOutClick}>
					<i className="fab fa-google" /> Sign Out
				</RedButton>
			);
		} else {
			return (
				<Button onClick={this.onSignInClick}>
					<i className="fab fa-google" /> Sign in
				</Button>
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

export default connect(mapStateToProps, { signIn, signOut })(GoogleSignIn);
