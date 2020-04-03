import React from 'react';
import {Form} from 'react-bootstrap';

import Options from './Options';

class Question extends React.Component {

	render() {
		let result = '';

		switch(this.props.isCorrect) {
	        case true:
	        	result = <span>Correct</span>;
	        	break;
	        case false:
	    		result = <span>Incorrect</span>;
	    		break;
	    }

		return (
			<Form.Group controlId={'formQuestion' + this.props.question.number}>
			    <Form.Label>{this.props.question.label}</Form.Label>
			    <Options questionNumber={this.props.question.number}
						 options={this.props.question.options} 
						 onAnswer={this.props.onAnswer} />
				{result}
			</Form.Group>
		);
	}
}

export default Question;


