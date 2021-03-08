import React from 'react';
import { H1, TitleDiv, OuterTitleDiv } from './styles';

const Title = () => {
	return (
		<OuterTitleDiv>
			<TitleDiv>
				<div>
					<i className="fas fa-book-open" />
					<H1>Journals</H1>
				</div>
			</TitleDiv>
		</OuterTitleDiv>
	);
};

export default Title;
