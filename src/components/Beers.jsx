import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails';
import { Link } from 'react-router-dom';

function Beers() {
	const [ beers, setBeers ] = useState([]);

        useEffect(() => {
            axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((resApi) => {
                setBeers(resApi.data);
            }).catch((err) => {
                console.log('no beers', err);
            })
            }, 
        []);
    
	const ShowBeers = () => {
		return (
			<ul>
				{beers.map((beer) => {
					return (
						<Link key={beer._id} to={`/beer/${beer._id}`}>
							{''}
							<li onClick={BeerDetails}>{beer.name}</li>;{''}
						</Link>
					);
				})}
			</ul>
		);
	};
            return (
                <div>
                    <h1>Beers</h1>
                     <ShowBeers />
                </div>
	        );
}

export default Beers;