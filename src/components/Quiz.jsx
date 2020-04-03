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
            currentAnswers: [],
            isAllAnswered: false,
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
        this.recordAnswer.apply(this, e.target.value.split('_'));

        this.checkIfAllAnswered();
    }

    handleSubmit() {
        this.checkAnswers();
    }

    render() {
        const questions = this.state.filteredQuestions;
        const currentAnswers = this.state.currentAnswers;
        const isAllAnswered = this.state.isAllAnswered;

        return (
            <Container fluid className="quiz-container">
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Container className="nav-container">
                        <Navbar.Brand href="#home">English Quiz</Navbar.Brand>
                        <SearchBar onSearch={e => this.handleSearch(e)} />
                    </Container>
                </Navbar>
                <Container className="content-container">           
                    <PagedContent 
                        questions={questions}
                        currentAnswers={currentAnswers}
                        onAnswer={e => this.handleAnswer(e)}
                        onSubmit={() => this.checkAnswers()}
                        isAllAnswered={isAllAnswered}
                    />
                    <Paginator />
                </Container>
            </Container>
        );
    }

    /**
     * Record each answer as it happens
     */
    recordAnswer(questionNumber, answerNumber) {
        const currentAnswers = this.state.currentAnswers;

        const data = {
            answer: parseInt(answerNumber),
        };

        currentAnswers['question_' + questionNumber] = data;

        this.setState({
            currentAnswers: currentAnswers,
        });
    }

    /**
     * Check if all has been answered
     */
    checkIfAllAnswered() {
        const currentAnswers = this.state.currentAnswers;

        const questions = Object.keys(Questions).length;
        const answers   = Object.keys(currentAnswers).length;

        this.setState({
            isAllAnswered: answers === questions,
        });
    }

    /**
     * Check if answers are correct
     */
    checkAnswers() {
        const currentAnswers = this.state.currentAnswers;

        for (const key in currentAnswers) {
            const qNumber = key.split('_')[1];

            currentAnswers[key].isCorrect = Questions[qNumber].correctOption 
                                            === currentAnswers[key].answer;
        }

        this.setState({
            currentAnswers: currentAnswers,
        });
    }
}

export default Quiz;
