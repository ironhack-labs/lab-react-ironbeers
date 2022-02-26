import React from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


function SingleBeer() {
    const {id} = useParams();
    const [oneBeer, setOneBeer] = useState(null);

    useEffect(() =>{
        const getOneBeer = async () =>{
            const result = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers/" + id
            );
            setOneBeer(result.data);
        };
        getOneBeer();

    }, [id]);

    if (!oneBeer) {
        return <p>Fetching Beer ......</p>;
    };

    console.log('ONEBEER', oneBeer)
   
    return (
      <div className="BeerDetails"> 
        <img src={oneBeer.image_url} className="BeersList" style={{ maxHeight: '20vh'}} />
        <h3>{oneBeer.name}</h3>
        <p>{oneBeer.tagline}</p>
        <p>{oneBeer.first_brewed}</p>
        <p>{oneBeer.attenuation_level}</p>
        <p>{oneBeer.description}</p>
        <p>{oneBeer.contributed_by}</p>
      </div>
    );
}
export default SingleBeer;