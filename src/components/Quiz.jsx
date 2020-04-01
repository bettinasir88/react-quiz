import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

import SearchBar from './SearchBar';
import PagedContent from './PagedContent';
import Paginator from './Paginator';
import Questions from '../questions';

class Quiz extends React.Component {

	/**
	 * TODO: paginate content
	 */
	render() {
		const questions = Questions;

		return (
			<Container fluid className="quiz-container">
				<Navbar bg="dark" variant="dark" sticky="top">
					<Container className="nav-container">
						<Navbar.Brand href="#home">English Quiz</Navbar.Brand>
						<SearchBar />
					</Container>
				</Navbar>
				<Container className="content-container">			
					<PagedContent questions={questions} />
					<Paginator />
				</Container>
			</Container>
		);
	}
}

export default Quiz;


