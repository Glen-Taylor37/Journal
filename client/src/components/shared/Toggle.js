import React from 'react';

import styled from 'styled-components';

const Switch = styled.label`
	display: inline-block;
	position: relative;
	width: 50px;
	height: 18px;
	margin: 10px;
	border-radius: 25px;
	padding: 2px;
	background-color: ${(props) =>
		props.checked ? props.theme.link : props.theme.gray};
	text-align: center;
`;

const Slider = styled.span`
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 15px;
	width: 15px;
	margin-top: auto;
	margin-bottom: auto;
	-webkit-transition: .4s;
	transition: .4s;
	background-color: ${(props) => props.theme.white};
	border-radius: 15px;
`;

const CheckBox = styled.input.attrs({ type: 'checkbox' })`
	width: 0;
    opacity: 0;
    height: 0;

    &:checked + ${Slider} {
        -webkit-transform: translateX(39px);
        -ms-transform: translateX(39px);
        transform: translateX(39px);
    }
`;

const Toggle = ({ checked, onChange }) => {
	const onClickHandle = (event) => {
		event.stopPropagation();
	};

	return (
		<Switch checked={checked} onClick={onClickHandle}>
			<CheckBox
				onChange={(event) => onChange(event.target.checked)}
				checked={checked}
				type="checkbox"
			/>
			<Slider />
		</Switch>
	);
};

export default Toggle;
