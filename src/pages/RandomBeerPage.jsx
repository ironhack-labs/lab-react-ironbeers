import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RandomBeerPage() {
	const [randomBeer, setRandomBeer] = useState({});

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers`)
			.then((response) => {
				const BeerIdArray = response.data.map((beer) => beer._id);
				const randomId =
					BeerIdArray[Math.floor(Math.random() * BeerIdArray.length)];

				const amcerveza = response.data.find(
					(beer) => beer._id === randomId
				);
				setRandomBeer(amcerveza);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{randomBeer && (
				<>
					<div className="beer-detail" key={randomBeer._id}>
						<br />
						<br />
						<img src={`${randomBeer.image_url}`} />
						<h2>{randomBeer.name}</h2>
						<h3>{randomBeer.tagline}</h3>
						<h4>{randomBeer.first_brewed}</h4>
						<p>{randomBeer.attenuation_level}</p>
						<p>{randomBeer.description}</p>
						<p> {randomBeer.contributed_by}</p>
					</div>
				</>
			)}
		</>
	);
}

export default RandomBeerPage;