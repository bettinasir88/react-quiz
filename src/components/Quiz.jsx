import React from 'react';

import SearchBar from './SearchBar';
import PagedContent from './PagedContent';
import Paginator from './Paginator';

import Questions from '../questions';

class Quiz extends React.Component {

	/**
	 * TODO: page content
	 */
	render() {
		const questions = Questions;

		return (
			<div>
				<SearchBar />
				<PagedContent questions={questions} />
				<Paginator />
			</div>
		);
	}
}

export default Quiz;


