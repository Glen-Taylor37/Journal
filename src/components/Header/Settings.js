import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleDarkMode } from '@actions';
import { LIGHT_THEME, DARK_THEME } from '@shared/colors';
import { NavButton } from './styles';
import Icon from '@shared/Icon';

const Settings = (props) => {
	return (
		<NavButton>
			<Icon className="fas fa-cog" />Settings
		</NavButton>
	);
};

const mapStateToProps = (state) => {
	return { settings: state.settings };
};

export default connect(mapStateToProps, { toggleDarkMode })(Settings);
