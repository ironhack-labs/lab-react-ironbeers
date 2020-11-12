import React from 'react';
import Navbar from '../Navbar/Navbar';
import BeerCard  from '../BeerCard/BeerCard';
import StatusScreen from '../StatusScreen/StatusScreen';


export default function BeersList({beers, searchMethod, inputValue}) {
    return (
        <div>
            <Navbar />
            <input type="text" className="input search-bar" value={inputValue} name="searchBar" onChange={searchMethod} />
            {beers.map(beer => {
                return (
                    <BeerCard  name={beer.name} tagline={beer.tagline} author={beer.contributed_by} image={beer.image_url} key={beer.id} idKey={beer.id} />
                )
            })}
        </div>
        
    )
}