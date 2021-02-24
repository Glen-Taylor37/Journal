import React from 'react';
import styled from 'styled-components';
import { H1, TitleDiv } from './styles';

const Title = () => {
	return (
		<TitleDiv>
			<i className="fas fa-book-open" />
			<H1>Journals</H1>
		</TitleDiv>
	);
};

export default Title;
