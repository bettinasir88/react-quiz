import React from 'react';
import {Form, Button} from 'react-bootstrap';

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
				<Button variant="secondary" type="submit">
					Submit answers
				</Button>
			</Form>
		);
	}
}

export default PagedContent;

