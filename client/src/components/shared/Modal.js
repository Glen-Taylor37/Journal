import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const OutsideDiv = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	margin: 0;
	top: 0;
	left: 0;
	background-color: ${(props) => props.theme.modalBackground};
`;

const ModalDiv = styled.div`
	border: rgb(37, 36, 36) solid 1px;
	border-radius: 4px;
	background-color: ${(props) => props.theme.foreground};
	font-family: 'Roboto', sans-serif;
	text-align: center;
	border: 0;
	padding: 10px;
	margin: 0;
	position: absolute;
	left: 50%;
	top: 20%;
	transform: translate(-50%, -50%);
`;

const HeaderDiv = styled.div`margin-bottom: 5px;`;

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
