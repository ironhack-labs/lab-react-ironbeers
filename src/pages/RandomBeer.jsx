
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../components/Header';

function RandomBeer() {
	const [Beer, setBeer] = useState(null);
	const baseURL = 'https://ih-beers-api2.herokuapp.com/beers';
    
	useEffect(() => {
		axios
			.get(`${baseURL}/random`)
			.then((response) => {
				setBeer(response.data);
			})
			.catch((e) => console.log(e));
	}, []);

	return (
		<>
			<Header />
			{Beer ? (
				<>
					<div>
						{Beer.image_url && <img src={Beer.image_url} alt={Beer.name} />}

						<h1>{Beer.name}</h1>
						<h2>{Beer.attenuation_level}</h2>
						<h2>{Beer.tagline}</h2>
						<h2>{Beer.first_brewed}</h2>
						<p>{Beer.description}</p>
						<p>Created by: {Beer.contributed_by}</p>
					</div>
				</>
			) : (
				<p>Beer to your table...</p>
			)}
		</>
	);
}

export default RandomBeer;