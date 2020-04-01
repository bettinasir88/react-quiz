import React from 'react';
import {Form} from 'react-bootstrap';

import Question from './Question';

class PagedContent extends React.Component {

	render() {
		const questions = this.props.questions.map((question, number) => {
	      return (
	      	<Question 
	      		question={question}
	      		key={'question_' + question.number} />
	      );
	    });

		return (
			<Form className="form-striped">
				{questions}
			</Form>
		);
	}
}

export default PagedContent;

