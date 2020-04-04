import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './beer-details.scss';
import axios from 'axios';

export const BeerDetails = () => {
	const [beer, setBeer] = useState(null);
	//Vamos a coger el beer ID
	let {beerId} = useParams();


	//Si beerId no existe, mi variable beerId vale random y en la llamada a la api no le paso un ID en sí de una beer, si no que le paso 'random'
	if (!beerId) {
		beerId = 'random';
	}

	useEffect(() => {
		axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
			.then((res) => setBeer(res.data));
	}, [beerId]);

	return (
		!!beer && <div className={'beer-detail'}>
			<img src={beer.image_url} alt={'beer'}/>
			<div className={'info'}>
				<h3>{beer.name}</h3>
				<h3>{beer.attenuation_level}</h3>
			</div>
			<div className={'info'}>
				<h4>{beer.tagline}</h4>
				<h4>{beer.first_brewed}</h4>
			</div>
			<p className={'text'}>{beer.description}</p>
			<p className={'footer'}>{beer.contributed_by}</p>
		</div>
	)
};