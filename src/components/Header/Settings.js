import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleDarkMode } from '../../actions';
import { LIGHT_THEME, DARK_THEME } from '../shared/colors';

const Settings = (props) => {};

const mapStateToProps = (state) => {
	return { settings: state.settings };
};

export default connect();
