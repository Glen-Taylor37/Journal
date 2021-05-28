import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';

/*
	High order component to be utilized on pages where authorization is required. 
	If the user does not provide a JWT from local storage, then they are forced back to the home page.
*/
const requireAuth = (ChildComponent) => {
	class ComposedComponent extends React.Component {
		componentDidMount() {
			this.checkRedirect();
		}

		checkRedirect = () => {
			if (!this.props.auth) {
				history.push('/');
			}
		};

		render() {
			return <ChildComponent {...this.props} />;
		}
	}

	const mapStateToProps = (state) => {
		return { auth: state.user.token };
	};

	return connect(mapStateToProps, {})(ComposedComponent);
};

export default requireAuth;
