import styled from 'styled-components';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';

import colors from '../../shared/colors';
import { BaseContentDiv } from '../../shared/ContentDiv';
import { Button } from '../../shared/Button';

export const GridDiv = styled(BaseContentDiv)`
	display: grid;
	grid-template-columns: 15% 70% 15%;
`;

export const JournalDiv = styled.div`
	height 100%; 
	width 80%;
	justify-self: center;
`;
export const StyledQuill = styled(ReactQuill)`
	box-shadow: 0px 2px 4px 2px ${colors.blackShadow};
	border-radius: 4px;
    height: 80%;
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
	background-color: ${colors.blue};
	box-shadow: 0px 2px 4px 2px ${colors.blackShadow};
`;

export const EntryDiv = styled.div`
	background-color: ${colors.blue};
	transition: background-color .2s;
	margin-bottom: 5px;
	width: 100%;
	&:hover {
		background-color: ${colors.brightBlue};
	}
`;

export const EntryLink = styled(Link)`
    text-decoration: none;
    color: ${colors.white};
    font-family: inherit;
`;
