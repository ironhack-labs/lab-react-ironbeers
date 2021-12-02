import './ListBeers.css';
import ListItem from '../ListItem/ListItem.js';
import React from 'react';
import {useState, useEffect} from 'react';
import BeerService from '../../services/beer.service';




function ListBeers(props) {

	const myBeerService = new BeerService();

	useEffect(() => {
		loadBeers();
	});

	function loadBeers() {
		myBeerService.getAllBeers().then(response => {
			setBeers(response.data);
		});
	}

	const [beersState, setBeers] = useState();


	return (
			<div className="list-beers">
			{beersState?.map(beer => <ListItem key={beer._id} name={beer.name} img={beer.image_url} tagline={beer.tagline}/>)}
			</div>
		);
}

export default ListBeers;