import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Title from './Title';
import GoogleSignIn from './GoogleSignIn';
import {
	OuterTitleDiv,
	OuterNavDiv,
	HeaderDiv,
	NavDiv,
	Button,
	InnerNavDiv,
	Vl
} from './styles';

const Header = (props) => {
	const renderName = () => {
		if (props.name) {
			return (
				<InnerNavDiv>
					<i className="fas fa-user" />
					{props.name}
					<Vl />
				</InnerNavDiv>
			);
		} else return null;
	};

	return (
		<HeaderDiv>
			<OuterTitleDiv>
				<Title />
			</OuterTitleDiv>
			<OuterNavDiv>
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
			</OuterNavDiv>
		</HeaderDiv>
	);
};

const mapStateToProps = ({ user }) => {
	return { name: user.name };
};

export default connect(mapStateToProps, {})(Header);
