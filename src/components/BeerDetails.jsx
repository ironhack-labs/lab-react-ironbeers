import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BeerDetails(props) {
	let [ beer, setBeer ] = useState({});

	useEffect(() => {
		axios.get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`)
        .then((resApi) => {
		    console.log(resApi);
		        setBeer(resApi.data);
		}).catch((err)=>{
            console.log('something went wrong', err);
        })
	}, 
    []);

	return (
		<div className="beer-info">
			<div>
				<h1>{props.match.params.beerId}</h1>

				<img src={beer.image_url} alt="beer info"/>
			</div>
			<div>
				<h2>{beer.name}</h2>
			</div>
            <div>
                <p>{beer.description}</p>
                </div>
		</div>
	);
}

export default BeerDetails;