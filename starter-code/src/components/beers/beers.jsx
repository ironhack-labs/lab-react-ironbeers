import React, { useState, useEffect } from 'react';
import './beers.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Beer = ({image, name, tagline, contributed_by, id}) => {
	return (
		<Link className={'beer'} to={`/beers/${id}`}>
			<img src={image} alt={'beer'}/>
			<div>
				<h3>{name}</h3>
				<h4>{tagline}</h4>
				<p><strong>Created by:</strong> {contributed_by}</p>
			</div>
		</Link>
	)
};

export const Beers = () => {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		axios.get('https://ih-beers-api2.herokuapp.com/beers')
			.then((res) => setBeers(res.data));
	}, []);

	const search = (event) => {
		const value = event.target.value;

		axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
			.then( (res) => setBeers(res.data));
	};

	return (
		<div className={'beers'}>
			<input type={'text'} onChange={search} placeholder={'search'}/>
			{beers.map((e) =>
				<Beer key={e._id}
					  image={e.image_url}
					  name={e.name}
					  tagline={e.tagline}
					  contributed_by={e.contributed_by}
					  id={e._id}
				/>
			)
			}
		</div>
	)
};