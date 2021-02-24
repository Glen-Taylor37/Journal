import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0;
	top: 0;
	left: 0;
	background-color: rgba(31, 29, 41, 0.678);
	.content {
		justify-content: center;
		border: rgb(37, 36, 36) solid 1px;
		border-radius: 6px;
		box-shadow: 1px 2px 4px 2px #1c0527;
		background-color: var(--main-header-color);
		text-align: center;
		border: 0;
		padding: 10px;
		margin: 0;
		position: absolute;
		left: 50%;
		top: 20%;
		transform: translate(-50%, -50%);
	}
`;

const Modal = (props) => {
	return ReactDOM.createPortal(
		<ModalDiv className="modal">{props.content}</ModalDiv>,
		document.querySelector('#modal')
	);
};

export default Modal;
