import React from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class SearchBar extends React.Component {

	render() {
		return (
			<Form inline>
				<FormControl type="text" placeholder="Search for question..." className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		);
	}
}

export default SearchBar;
