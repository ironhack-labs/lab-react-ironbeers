import React from 'react';
//use effect use state
import { useState, useEffect } from 'react';
//Axios
import axios from 'axios';
//Components
import Menu from './Menu/Menu.js';
//Assets
import './../App.css';

const SingleBeer = (props) => {
	//sincrono - asincrono
	const [ fetching, setFetching ] = useState(false);
	//beer y estado
	const [ beer, setBeerData ] = useState([]);

	//console.log(props.match.params.id);
	//console.log(props.match.params);

	useEffect(() => {
		if (props.match.params.id === 'random-beer') {
			axios
				.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
				.then((response) => {
					//console.log('hi', response.data);
					setBeerData(response.data);
					setFetching(true);
				})
				.catch((err) => console.error(err));
		} else {
			axios
				.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.id}`)
				.then((response) => {
					//console.log('hi', response.data);
					setBeerData(response.data);
					setFetching(true);
				})
				.catch((err) => console.error(err));
		}
		// eslint-disable-next-line
	}, []);

	//console.log(beer);

	return fetching ? (
		<div>
			<Menu />
			<div className="singleBeerContainer" key={beer._id}>
				<div className="divImageContainer">
					<img src={beer.image_url} alt="Beer" className="singleBeerImg" />
				</div>

				<div className="beerInfoContainer">
					<div className="beerJustifiedContent">
						<h1>{beer.name}</h1>
						<h1 class="textGrey">{beer.attenuation_level}</h1>
					</div>
					<div className="beerJustifiedContent">
						<h3 class="textGrey sizedText">{beer.tagline}</h3>
						<h5 class="sizedText2">{beer.first_brewed}</h5>
					</div>
					<p class="textBeerInfo">{beer.description}</p>
					<p className="textGrey sizedText2 bolder">{beer.contributed_by}</p>
				</div>
			</div>
		</div>
	) : (
		<div className="loadingFetchingPage">Loading</div>
	);
};

export default SingleBeer;
