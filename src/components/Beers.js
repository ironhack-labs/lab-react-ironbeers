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
	const [ filterText, setFilterText ] = useState([]);

	useEffect(() => {
		axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
			setBeersData(response.data);
			setFilterText(response.data);
			setFetching(true);
		});

		// eslint-disable-next-line
	}, []);

	const filter = (filterInfo) => {
		let text = beers;

		if (filterInfo !== '') {
			setFilterText(text.filter((beer) => beer.name.startsWith(filterInfo)));
		} else {
			setFilterText(beers);
		}
	};

	return fetching ? (
		<div>
			<Menu />
			<Search filter={filter} />
			<div className="beerContainer">
				{filterText.map((beer) => {
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
