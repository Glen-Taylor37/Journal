import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import GoogleSignIn from './GoogleSignIn';
import { OuterNavDiv, NavDiv, Button, InnerNavDiv, Vl } from './styles';

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

	return (
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
						<Icon className="fas fa-cog" />Settings
					</Button>
					<GoogleSignIn />
				</InnerNavDiv>
			</NavDiv>
		</OuterNavDiv>
	);
};

const mapStateToProps = ({ user }) => {
	return { name: user.name };
};

export default connect(mapStateToProps, {})(Nav);
