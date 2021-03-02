import styled from 'styled-components';
import colors from '../../shared/colors';
import { BaseContentDiv } from '../../shared/ContentDiv';
import { Button } from '../../shared/Button';
import ReactQuill from 'react-quill';

export const GridDiv = styled(BaseContentDiv)`
	display: grid;
	grid-template-columns: 20% 80%;
`;

export const JournalDiv = styled.div`
	height 80%; 
	width 100%;
	align-self: start;
`;
export const EditorDiv = styled(ReactQuill)`
	box-shadow: 4px 4px 8px 2px ${colors.blackShadow};
	border-radius: 6px;
`;

export const PostButton = styled(Button)`
	background-color: ${colors.green};
	height: auto;
	margin-top: 20px;
`;
