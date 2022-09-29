import { fetchBeerDetail, fetchRandomBeer } from "../../services/beerServices"
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BeerDetail() {
    const [beer, setBeer] = useState(null)
    const { id } = useParams();
    
    useEffect(() => {
        if(id) {
            fetchBeerDetail(id)
            .then((beerData) => {
                setBeer(beerData.data)
            })
        } else {
            fetchRandomBeer()
            .then((beerData) => {
                setBeer(beerData.data)
            })
        }
    }, [id])  

    return (
        <div>
        {
            beer ? 
                <div>
                    <img src={beer.image_url} alt={beer.name} height="400px" />
                    <div className="flex">
                        <div>
                            <h4>{beer.name}</h4>
                            <h5>{beer.tagline}</h5>
                        </div>
                        <div>
                            <h4>{beer.attenuation_level}</h4>
                            <h5>{beer.first_brewed}</h5>
                        </div>
                    </div>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            :
                <p>Loading beer details...</p>
        }
        </div>
    )
}
