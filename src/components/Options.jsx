import React from 'react';

class Options extends React.Component {

	render() {
		const questionNumber = this.props.questionNumber;

		const options = this.props.options.map((option, optionNumber) => {
	      return (
	      	<label 
	      		key={'option_' + questionNumber + '_' + optionNumber}
	      		htmlFor={'option_' + questionNumber + '_' + optionNumber}>
	      		{option}
	        	<input 
	        		type="radio"
	        		name={'question_' + questionNumber}
	        		value={'option_' + optionNumber}
	        		id={'option_' + questionNumber + '_' + optionNumber}
            	/>
			</label>
	      );
	    });

		return options;
	}
}

export default Options;