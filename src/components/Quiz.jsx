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
			filteredQuestions: Questions,
			answers: [],
		}
	}

	handleSearch(e) {
		const searchText = e.target.value;
		
		const filteredQuestions = Questions.filter((question) => {
			var regex = new RegExp(searchText, "i");
			return regex.test(question.label); 
	    });

		this.setState({
			filteredQuestions: filteredQuestions
		});
	}

	handleAnswer(e) {
		const currentAnswers = this.state.answers;
		const [question, answer] = e.target.value.split('_');

		currentAnswers['question_' + question] = answer;
		
		this.setState({
			answers: currentAnswers,
	    });
	}

	handleSubmit() {
		this.checkAnswers();
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
					<PagedContent 
						questions={questions} 
						onAnswer={e =>this.handleAnswer(e)} 
					/>
					<Paginator />
				</Container>
			</Container>
		);
	}

	validateAnswers() {

	}

	checkAnswers() {
		this.validateAnswers();
	}
}

export default Quiz;


