import React, { Component } from 'react';
import Navbar from './Navbar';

class NewBeer extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="form-newBeer">
					<h1>aqui pongo mi formulario new beer en "/new-beer" </h1>
				</div>
			</div>
		);
	}
}

export default NewBeer;
