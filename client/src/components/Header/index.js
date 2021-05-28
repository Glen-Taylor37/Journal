import React from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import { HeaderDiv } from './styles';
import Nav from './Nav';

const Header = (props) => {
	return (
		<HeaderDiv>
			<Title />
			<Nav />
		</HeaderDiv>
	);
};

const mapStateToProps = ({ user }) => {
	return { name: user.name };
};

export default connect(mapStateToProps, {})(Header);
