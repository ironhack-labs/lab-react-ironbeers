import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { getBeers } from '../services/beers'

const { Meta } = Card;

function AllBeers() {
    const [beers, setbeers] = useState(null)

    async function fetchBeers() {
        const beers = await getBeers()
        setbeers(beers)
    }
    
    useEffect(() => {
        fetchBeers()
        console.log(beers)
    }, [])
    
    return beers ? (beers.map(el => (
        <div className="beerCard">
            <div>
                <img className="beerImage" src={el.image_url} alt="beer"/>
            </div>
            <div className="beerInfo">
                <strong>{el.name}</strong>
                <p>{el.tagline}</p>
                <small>{el.contributed_by}</small>
            </div>
        </div>
    ))) : 'Loading'
}

export default AllBeers
