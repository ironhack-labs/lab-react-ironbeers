import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import SingleBeerDisplay from '../components/SingleBeerDisplay';

const SingleBeer = () => {
	const [beer, setBeer] = useState(null);

	const API_URL = 'https://ih-beers-api2.herokuapp.com/beers/random';
	console.log(API_URL);
	useEffect(() => {
		axios
			.get(`${API_URL}`)
			.then((response) => {
				setBeer(response.data);
				console.log(beer);
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<Header />
			{beer === null ? (
				<span>Loading Beer...</span>
			) : (
				<SingleBeerDisplay beer={beer} />
			)}
		</>
	);
};

export default SingleBeer;
