import React from 'react';

import Options from './Options';

class Question extends React.Component {

	render() {
		return (
			<li>
				<p>{this.props.question.label}</p>
				<Options questionNumber={this.props.question.number}
						 options={this.props.question.options} />
			</li>
		);
	}
}

export default Question;


