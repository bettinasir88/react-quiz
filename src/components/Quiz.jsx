import React from 'react';
import {Navbar, Container} from 'react-bootstrap';

import SearchBar from './SearchBar';
import PagedContent from './PagedContent';
import Paginator from './Paginator';
import Questions from '../questions';

class Quiz extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			searchText: '', 
			filteredQuestions: Questions
		}
	}

	handleSearch(e) {
		const searchText = e.target.value;

		this.setState({searchText: searchText});
		
		const filteredQuestions = Questions.filter((question) => {
			var regex = new RegExp(searchText, "i");
			return regex.test(question.label); 
	    });

		this.setState({filteredQuestions: filteredQuestions});
	}

	render() {
		const questions = this.state.filteredQuestions;

		return (
			<Container fluid className="quiz-container">
				<Navbar bg="dark" variant="dark" sticky="top">
					<Container className="nav-container">
						<Navbar.Brand href="#home">English Quiz</Navbar.Brand>
						<SearchBar onSearch={e =>this.handleSearch(e)} />
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


