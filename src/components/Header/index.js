import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from './Title';
import GoogleSignIn from './GoogleSignIn';

import { HeaderDiv, NavDiv, Button, InnerNavDiv, Vl } from './styles';

const Header = (props) => {
	const renderName = () => {
		if (props.name) {
			return (
				<InnerNavDiv className="user">
					<i className="fas fa-user" />
					{props.name}
					<Vl />
				</InnerNavDiv>
			);
		} else return null;
	};

	return (
		<HeaderDiv>
			<Title />
			<NavDiv>
				<InnerNavDiv>
					{renderName()}
					<Button as={Link} to="/">
						Journals
					</Button>
				</InnerNavDiv>
				<InnerNavDiv>
					<Button>
						<i className="fas fa-cog" />Settings
					</Button>
					<GoogleSignIn />
				</InnerNavDiv>
			</NavDiv>
		</HeaderDiv>
	);
};

// const Header = (props) => {
// 	const renderName = () => {
// 		if (props.name) {
// 			return (
// 				<NameDiv className="user">
// 					<i className="fas fa-user" />
// 					{props.name}
// 					<Vl />
// 				</NameDiv>
// 			);
// 		} else return null;
// 	};

// 	return (
// 		<HeaderDiv className="header ui-container">
// 			<div />
// 			<Title />
// 			<NavDiv className="nav">
// 				{renderName()}
// 				<StyledLink to="/" className="transparent">
// 					Journals
// 				</StyledLink>
// 				<NavRightDiv className="nav-right">
// 					<TransparentButton>
// 						<i className="fas fa-cog" />Settings
// 					</TransparentButton>
// 					<GoogleSignIn />
// 				</NavRightDiv>
// 			</NavDiv>
// 		</HeaderDiv>
// 	);
// };

// const Header = (props) => {
// 	const renderName = () => {
// 		if (props.name) {
// 			return (
// 				<div className="user">
// 					<i className="fas fa-user" />
// 					{props.name}
// 					<div className="vl" />
// 				</div>
// 			);
// 		} else return null;
// 	};

// 	return (
// 		<div className="header ui-container">
// 			<Title />
// 			<div className="nav">
// 				{renderName()}
// 				<Link to="/" className="ui button transparent">
// 					Journals
// 				</Link>
// 				<div className="nav-right">
// 					<button className="ui transparent button">
// 						<i className="fas fa-cog" />Settings
// 					</button>
// 					<GoogleSignIn />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const mapStateToProps = ({ user }) => {
	return { name: user.name };
};

export default connect(mapStateToProps, {})(Header);
