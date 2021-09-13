import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const NewBeer = () => {
	let newBeerName;

	let [ beer, setBeer ] = useState('');

	const handleChange = (e) => {
		setBeer(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(beer);
		axios.post('https://ih-beers-api2.herokuapp.com/beers/new', { name: beer }).then(function(res) {
			console.log(res.data);
		});
	};

	return (
		<div>
			<h1>New Beers</h1>

			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} placeholder="something funny" />
				<button>Add Beer</button>
			</form>
		</div>
	);
};

export default NewBeer;
