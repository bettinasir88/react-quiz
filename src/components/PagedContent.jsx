import React from 'react';

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
			<div>{questions}</div>
		);
	}
}

export default PagedContent;
