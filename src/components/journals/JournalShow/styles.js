import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';

import colors from '../../shared/colors';
import { BaseContentDiv } from '../../shared/ContentDiv';
import { Button } from '../../shared/Button';

export const GridDiv = styled(BaseContentDiv)`
	display: grid;
	grid-template-columns: 10% 65% 1fr;
`;

export const JournalDiv = styled.div`
	height 80%; 
	width 100%;
	align-self: start;
`;
export const EditorDiv = styled(ReactQuill)`
	box-shadow: 4px 4px 8px 2px ${colors.blackShadow};
	border-radius: 6px;

    transition: width 2s;
`;

export const PostButton = styled(Button)`
	background-color: ${colors.green};
	height: auto;
	margin-top: 20px;
`;

export const EntriesTitleDiv = styled.h3`
	margin-top: 5px;
	margin-bottom: 10px;
	color: ${colors.white};
`;

export const EntriesDiv = styled.div`
	height: 80%;
	width: 80%;
	justify-self: center;
	padding-left: 5px;
	background-color: ${colors.blue};
	box-shadow: 0px 2px 4px 2px ${colors.blackShadow};
`;

export const EntryDiv = styled.div`
	background-color: ${colors.blue};
	transition: background-color .2s;
	&:hover {
		background-color: ${colors.brightBlue};
	}
`;

export const EntryLink = styled(Link)`
    text-decoration: none;
    color: ${colors.white};
    font-family: inherit;
`;
