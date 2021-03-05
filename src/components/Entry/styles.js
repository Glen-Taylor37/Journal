import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';

import { BaseContentDiv } from '@shared/ContentDiv';
import { Button } from '@shared/Button';

export const GridDiv = styled(BaseContentDiv)`
	display: grid;
	grid-template-columns: 20% 60% 20%;
`;

export const JournalDiv = styled.div`
	justify-self: center;
	height: fit-content;
	color: ${(props) => props.theme.foreText};

	background-color: ${(props) => props.theme.foreground};
	box-shadow: 0px 2px 4px 2px ${(props) => props.theme.foregroundShadow};
	border-radius: 4px;
	min-height: 400px;
`;

export const StyledQuill = styled(ReactQuill)`
	box-shadow: none;
	border-radius: 8px;

	& > .ql-toolbar {
		border: none;
		font-family: 'Roboto', sans-serif !important;
	}
	
	& > .ql-container {
		border: none;
		font-family: 'Roboto', sans-serif !important;
	}
`;

export const PostButton = styled(Button)`
	height: auto;
	margin-top: 20px;
	color: ${(props) => props.theme.foreText};
	background-color: ${(props) => props.theme.brightAccent};
`;

export const EntriesTitleDiv = styled.h3`
	margin-top: 5px;
	margin-bottom: 10px;
	color: ${(props) => props.theme.foreText};
`;

export const EntriesDiv = styled.div`
	height: 80%;
	width: 80%;
	background-color: ${(props) => props.theme.accent};
	border-radius: 4px;
	padding-left: 2px;
	padding-right: 2px;
	box-shadow: 0px 2px 4px 2px ${(props) => props.theme.foregroundShadow};
`;

export const EntryDiv = styled.div`
	background-color: ${(props) => props.theme.accent};
	transition: background-color .2s;
	margin-bottom: 5px;
	width: 100%;
	&:hover {
		background-color: ${(props) => props.theme.brightAccent};
	}
`;

export const EntryLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.foreText};
    font-family: inherit;
`;
