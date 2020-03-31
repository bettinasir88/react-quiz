import React from 'react';

class SearchBar extends React.Component {

	render() {
		return (
			<div>
				<label htmlFor="question-search">Search by text:</label>
				<input type="search" 
					   id="question-search"
					   name="q"
				       aria-label="Search through the questions" />
				<button>Search</button>
			</div>
		);
	}
}

export default SearchBar;
