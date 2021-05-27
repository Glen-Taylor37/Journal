import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { updateSettings, getSettings } from '@actions';
import { LIGHT_THEME, DARK_THEME } from '@shared/colors';
import Toggle from '@shared/Toggle';
import { NavButton } from './styles';
import { Button } from '@shared/Button';
import Icon from '@shared/Icon';

const NavDropdown = styled.div`
	position: absolute;
	border: none;
	outline: none;
	box-shadow: none;
	text-decoration: none;
	width: 100%;
	color: ${(props) => props.theme.foreText};
	background-color: ${(props) => props.theme.foreground};
	box-shadow: 0px 2px 4px 2px ${(props) => props.theme.foregroundShadow};

	&:hover {
		background-color: ${(props) => props.theme.buttonHover};
	}
`;

const DropDownContainer = styled.div`
	position: relative;
	padding: 0px 6px 0px 6px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;
	box-shadow: none;
	font-size: inherit;
	font-family: inherit;
	display: inline;
	text-decoration: none;
	color: ${(props) => props.theme.foreText};
	background-color: ${(props) => props.theme.foreground};
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.theme.buttonHover};
	}
`;

class Settings extends React.Component {
	state = {
		isOpen : false
	};

	componentDidMount() {
		this.props.getSettings();
	}

	onSettingsClick = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	onThemeChange = (checked) => {
		this.props.updateSettings({ darkTheme: checked });
	};

	renderDropdown() {
		const { darkTheme } = this.props.settings;

		if (!this.state.isOpen) {
			return null;
		}

		return (
			<NavDropdown>
				<Icon className={darkTheme ? 'fas fa-moon' : 'fas fa-sun'} />
				<Toggle checked={darkTheme} onChange={this.onThemeChange} />
			</NavDropdown>
		);
	}

	render() {
		return (
			<DropDownContainer onClick={this.onSettingsClick}>
				<Icon className="fas fa-cog" />Settings
				{this.renderDropdown()}
			</DropDownContainer>
		);
	}
}

const mapStateToProps = (state) => {
	return { settings: state.settings, userId: state.user.googleId };
};

export default connect(mapStateToProps, { updateSettings, getSettings })(
	Settings
);
