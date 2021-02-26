import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import colors from './colors';

const OutsideDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0;
	top: 0;
	left: 0;
	background-color: rgba(31, 29, 41, 0.678);
`;

const ModalDiv = styled.div`
	border: rgb(37, 36, 36) solid 1px;
	border-radius: 6px;
	box-shadow: 1px 2px 4px 2px #1c0527;
	background-color: ${colors.white};
	font-family: 'Montserrat';
	text-align: center;
	border: 0;
	padding: 10px;
	margin: 0;
	position: absolute;
	left: 50%;
	top: 20%;
	transform: translate(-50%, -50%);
`;

const HeaderDiv = styled.div`
	font-weight: bold;
	text-decoration: underline;
	margin-bottom: 5px;
`;

const ContentDiv = styled.div``;

const FooterDiv = styled.div``;

class Modal extends React.Component {
	render() {
		if (!this.props.isOpen) {
			return null;
		}
		return ReactDOM.createPortal(
			<OutsideDiv onClick={this.props.onDismiss}>
				<ModalDiv onClick={(e) => e.stopPropagation()}>
					<HeaderDiv>{this.props.title}</HeaderDiv>
					<ContentDiv>{this.props.content}</ContentDiv>
					<FooterDiv>{this.props.footer}</FooterDiv>
				</ModalDiv>
			</OutsideDiv>,
			document.querySelector('#modal')
		);
	}
}

export default Modal;
