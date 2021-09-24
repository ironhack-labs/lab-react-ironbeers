import React from 'react';
//React router dom
import { Link } from 'react-router-dom';
//use effect use state
import { useState, useEffect } from 'react';
//Axios
import axios from 'axios';
//Components
import Menu from './Menu/Menu.js';
import Search from '../components/Search/Search';
//Assets
import './../App.css';

const Beers = () => {
	//sincrono - asincrono
	const [ fetching, setFetching ] = useState(false);
	//beers y estado
	const [ beers, setBeersData ] = useState([]);
	//Filter text
	const [ filteredText, setFilteredText ] = useState([]);

	useEffect(() => {
		axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
			setBeersData(response.data);
			setFilteredText(response.data);
			setFetching(true);
		});

		// eslint-disable-next-line
	}, []);

	const filter = (filteredText) => {
		let inputText = beers;

		if (filteredText === '') {
			//console.log('hola');
			setFilteredText(beers);
		} else {
			setFilteredText(inputText.filter((beer) => beer.name.includes(filteredText)));
		}
	};

	return fetching ? (
		<div>
			<Menu />
			<Search filter={filter} />
			<div className="beerContainer">
				{filteredText.map((beer) => {
					return (
						<Link to={`/beer/${beer._id}`} key={beer._id}>
							<div className="beerContainerSingular">
								<div className="beerImageContainer">
									<img src={beer.image_url} class="beerListImage" alt="Beer" />
								</div>
								<div className="beerInfo">
									<h1>{beer.name}</h1>
									<h3>{beer.tagline}</h3>
									<p>
										<span className="beerInfoSpan">Created by: </span>
										<span className="preventClickColor">{beer.name}</span>
									</p>
								</div>
							</div>
							<hr />
						</Link>
					);
				})}
			</div>
		</div>
	) : (
		<div className="loadingFetchingPage">Loading</div>
	);
};

export default Beers;
