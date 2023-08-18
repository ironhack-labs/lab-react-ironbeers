
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';


function Details () {

    const [beer, setBeer] = useState({});

    const {id} = useParams();

        useEffect(() => {
        
            axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                console.log(response.data); // Console log the response for debugging
                setBeer(response.data);
            })
            .catch(error => {
                console.error('Error fetching beer details:', error);
            });
        }, [id]);

    return (
        <div>
            <h2>Beer Details</h2>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>Tagline: {beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Contributed By: {beer.contributed_by}</p>
        </div>
    );
}
 
export default Details;