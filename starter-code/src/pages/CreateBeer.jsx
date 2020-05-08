import React, { Component } from 'react';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';

class CreateBeer extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<CreateForm />
			</React.Fragment>
		);
	}
}

export default CreateBeer;
