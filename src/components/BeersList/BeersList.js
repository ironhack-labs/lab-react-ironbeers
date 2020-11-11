import React from 'react';
import Navbar from '../Navbar/Navbar';
import BeerCard  from '../BeerCard/BeerCard';
import StatusScreen from '../StatusScreen/StatusScreen';


export default function BeersList({beers}) {
    if (beers.length < 1) {return (<StatusScreen loading={true} />)}
    else return (
        <div>
            <Navbar />
            {beers.map(beer => {
                return (
                    <BeerCard  name={beer.name} tagline={beer.tagline} author={beer.contributed_by} image={beer.image_url} key={beer._id} idKey={beer._id} />
                )
            })}
        </div>
        
    )
}