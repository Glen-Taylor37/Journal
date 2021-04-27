import styled, { css } from 'styled-components';

import { Button } from '@shared/Button';

export const Label = styled.label`
	display: block;
	color: ${(props) => props.theme.foreText};
`;

export const Input = styled.input`
	width: 100%;
	box-sizing: border-box;
`;

export const BoxStyle = css`
	padding: 10px 10px 10px 10px;
	align-self: center;
	background-color: ${(props) => props.theme.foreground};
	box-shadow: 0px 2px 2px 1px ${(props) => props.theme.foregroundShadow};
`;

export const Box = styled.div`${BoxStyle};`;

export const Form = styled.form`${BoxStyle} width: 30%;`;

export const Error = styled.p`color: ${(props) => props.theme.red};`;

export const SubmitButton = styled(Button)`
    background-color: ${(props) => props.theme.brightAccent};
    &:hover {
		background-color ${(props) => props.theme.accent};
	}
`;
