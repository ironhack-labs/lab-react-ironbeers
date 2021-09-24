import React, { useState } from 'react';

export default function BeersList (props) {
    console.log(props.beers[1])
    const beersList = props.beers.map(beer => {
        return (
            <div key={beer._id}>
            <h2>{beer.name}</h2>
            </div>
        )})
	return (
		<div>
          {beersList}
        </div>
	)
}