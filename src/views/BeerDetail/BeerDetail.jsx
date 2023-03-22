import { getEachBeer, getRandomBeer } from "../../services/beerService";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BeerDetail() {
    const [loading, setLoading] = useState(true);
    const [beer, setBeer] = useState(null);
    const [err, setErr] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        if(id) {
            getEachBeer(id)
            .then((beerData) => {
                setLoading(false)
                setBeer(beerData)
            })
            .catch(err => {
                setLoading(false)
                setErr(true)
            })
        } else {
            getRandomBeer()
            .then((beerData) => {
                setLoading(false)
                setBeer(beerData)
            })
            .catch(err => {
                setLoading(false)
                setErr(true)
            })
        }
    }, [id])

    return (
        <div className="BeerDetail">
        {
            loading &&
            <div className="loader"></div>
        }
        {
            beer &&
            <>
                <img src={ beer.image_url } alt={ beer.name }/>
                <div className="beer-detail-content">
                    <h3>{ beer.name }</h3>
                    <h6>{ beer.tagline}</h6>
                    <p>{ beer.first_brewed }</p>
                    <p>{ beer.atenuation_level }</p>
                    <p>{ beer.description }</p>
                    <p>{ beer.contributed_by }</p>
                </div> 
            </>
        }
        {
            err &&
            <div>SOMETHING WENT WRONG, TRY AGAIN.</div>
        }
        </div>
    )
}