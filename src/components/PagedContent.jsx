import React from 'react';
import {Form, Button} from 'react-bootstrap';

import Question from './Question';

class PagedContent extends React.Component {

    render() {
        const currentAnswers = this.props.currentAnswers;
        const isAllAnswered  = this.props.isAllAnswered;

        const questions = this.props.questions.map((question, number) => {
            
            const isCorrect = currentAnswers['question_' + number]?.isCorrect ?? null;

            return (
                <Question
                    question={question}
                    key={'question_' + question.number}
                    onAnswer={this.props.onAnswer} 
                    isCorrect={isCorrect} />
            );
        });

        return (
            <Form className="form-striped">
                {questions}
                <Button 
                    variant="secondary"
                    onClick={this.props.onSubmit}
                    disabled={!isAllAnswered}
                >
                    Submit answers
                </Button>
            </Form>
        );
    }
}

export default PagedContent;

