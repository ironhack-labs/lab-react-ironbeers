import React, { useState, useEffect } from 'react'
import HeaderNav from '../HeaderNav'
import BeerCard from './BeerCard'
import axios from 'axios';

function BeerListContainer() {

    const [beerList, setBeerList] = useState([]);

    useEffect(() => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(({data}) => setBeerList(data))
            .catch(err => console.error("An error has occurred when get the beer list.", err))
    }, [])

    const renderList = beerList.map(({name, tagline, image_url, contributed_by, _id}) => (
        <BeerCard 
            name={name} 
            tagline={tagline} 
            img={image_url} 
            contributed_by={contributed_by}
            id={_id}
            key={_id}
        />
    ))
    
    return(
        
        <div>
            <HeaderNav/>
            {renderList}
        </div>
    )
}

export default BeerListContainer