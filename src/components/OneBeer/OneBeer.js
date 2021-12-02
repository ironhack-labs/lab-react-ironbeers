import React from 'react'
import { useState, useEffect } from 'react';
import BeerService from '../../services/beer.service';

function OneBeer(props) {
	console.log(props.match)
	const myBeerService = new BeerService();

	useEffect(() => {
		loadBeers();
	}, []);

	function loadBeers() {
		myBeerService.getOneBeer(props.match.params.id).then(response => {
			setBeers(response.data);
		});
	}

	const [beersState, setBeers] = useState();

	return (
		<div>
			<h1>{beersState?.name}</h1>
			<div>
				<img src={beersState?.image_url}></img>
			</div>
			<p>{beersState?.tagline}</p>

		</div>
	
	)
}

export default OneBeer