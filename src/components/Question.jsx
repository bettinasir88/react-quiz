import React from 'react';
import {Form} from 'react-bootstrap';

import Options from './Options';

class Question extends React.Component {

	render() {
		return (
			<Form.Group controlId={'formQuestion' + this.props.question.number}>
			    <Form.Label>{this.props.question.label}</Form.Label>
			    <Options questionNumber={this.props.question.number}
						 options={this.props.question.options} />
			</Form.Group>
		);
	}
}

export default Question;


