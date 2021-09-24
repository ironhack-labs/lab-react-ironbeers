import React from 'react';
//React router dom
import { Link } from 'react-router-dom';
//use effect use state
import { useState, useEffect } from 'react';
//Axios
import axios from 'axios';
//Components
import Menu from './Menu/Menu.js';
//Assets
import './../App.css';

const Beers = () => {
	//sincrono - asincrono
	const [ fetching, setFetching ] = useState(true);
	//beers y estado
	const [ beers, setBeersData ] = useState([]);

	useEffect(() => {
		axios
			.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((response) => {
				//console.log('hi', response.data);
				setBeersData([ ...response.data ]);
				setFetching(false);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<Menu />
			<div className="beerContainer">
				{beers.map((beer) => {
					return (
						<Link to={`/${beer._id}`} key={beer._id}>
							<div className="beerContainerSingular">
								<div className="beerImageContainer">
									<img src={beer.image_url} class="beerListImage" />
								</div>
								<div className="beerInfo">
									<h1>{beer.name}</h1>
									<h3>{beer.tagline}</h3>
									<p>
										<span class="beerInfoSpan">Created by: </span>
										{beer.name}
									</p>
								</div>
							</div>
							<hr />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Beers;
