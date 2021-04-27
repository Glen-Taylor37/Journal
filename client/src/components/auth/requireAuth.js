import React from 'react';
import { connect } from 'react-redux';
import history from '../../history';

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
