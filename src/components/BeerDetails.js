import React, {useEffect, useState} from 'react';
import axios from "axios"
import {useParams} from "react-router-dom";

export const BeerDetails = () => {
    const {beerId} = useParams();

    const [beer, setBeer] = useState(null)

    useEffect(() => {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => setBeer(response.data))
            .catch(err => console.log(err))

    }, []);


    if (!beer) return <></>
    return (
        <>
            <div className="beer">
                <img style={{height: "8rem"}} src={beer.image_url} alt={beer.name}/>
                <h1>{beer.name}</h1>
                <p>{beer.tagline}</p>
                <h2>{beer.attenuation_level}</h2>
                <h2>{beer.first_brewed}</h2>
                <p style={{padding: '1rem'}}>{beer.description}</p>
                <h5><strong>Created by:</strong> {beer.contributed_by}</h5>
            </div>
        </>
    );
}