import styled from 'styled-components';

import { Button } from '@shared/Button';

export const Label = styled.label`
	display: block;
	color: ${(props) => props.theme.foreText};
`;

export const Input = styled.input`
	width: 100%;
	box-sizing: border-box;
`;

export const Form = styled.form`
	padding: 10px 10px 10px 10px;
	align-self: center;
	width: 30%;
	background-color: ${(props) => props.theme.foreground};
	box-shadow: 0px 2px 2px 1px ${(props) => props.theme.foregroundShadow};
`;
export const Error = styled.p`color: ${(props) => props.theme.red};`;

export const SubmitButton = styled(Button)`
    background-color: ${(props) => props.theme.brightAccent};
    &:hover {
		background-color ${(props) => props.theme.accent};
	}
`;
