import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeer = () => {
	let [ randomBeer, setRandomBeer ] = useState({});

	useEffect(() => {
		axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`).then((resApi) => {
			setRandomBeer(resApi.data);
		});
	}, []);

	return (
		<div className="randomBeer-info">
			<div>
				<img style={{ maxWidth: '2rem', height: 'auto' }} src={randomBeer.image_url} />
			</div>
			<div>
				<h2>{randomBeer.name}</h2>
			</div>
		</div>
	);
};

export default RandomBeer;
