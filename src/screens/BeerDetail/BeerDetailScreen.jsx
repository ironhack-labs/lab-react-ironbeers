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
        <div className="BeerDetail">
        {
            beer ? 
                <>
                    <div className="beer-detail-top">
                        <div className="beer-detail-top-image">
                            <img src={beer.image_url} alt={beer.name} height="250px" />
                        </div>
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
                    </div>
                    <div className="beer-detail-bottom">
                        <p>{beer.description}</p>
                        <small>{beer.contributed_by}</small>
                    </div>
                </>
            :
                <p>Loading beer details...</p>
        }
        </div>
    )
}
