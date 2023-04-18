import React from 'react';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeer = () => {
	const [beer, setBeer] = useState('');

	useEffect(() => {
		axios
			.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
			.then((res) => {
				setBeer(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<Header />
			<div className='container-fluid d-flex flex-column'>
				<div className='single-beer-image d-flex justify-content-center p-5'>
					<img src={beer.image_url} alt='a specific beer' />
				</div>

				<div className='d-flex justify-content-between p-2'>
					<div>
						<h2>{beer.name}</h2>
					</div>
					<div>
						<h4>{beer.attenuation_level}</h4>
					</div>
				</div>

				<div className='d-flex justify-content-between p-2'>
					<div>
						<p>{beer.tagline}</p>
					</div>
					<div>
						<p>
							<strong>{beer.first_brewed}</strong>
						</p>
					</div>
				</div>

				<div className='d-flex align-items-start flex-column'>
					<p className='fw-bold lh-sm'>{beer.description}</p>
					<p className='fw-bold tagline'>{beer.contributed_by}</p>
				</div>
			</div>
		</div>
	);
};

export default RandomBeer;
