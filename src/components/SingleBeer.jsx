import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


function SingleBeer() {
    const {id} = useParams();
    const [beers, setBeers] = useState(null);

    const getBeers = async () => {
        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            const beers = response.data;
            setBeers(beers);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBeers();
    }, [])

  return (
    <div>
        {beers && <div>
            <img className="beer_image_details" src={beers.image_url}></img>
            <h1>{beers.name}</h1>
            <p>{beers.tagline}</p>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
            </div>  
            }
    </div>
  )
}

export default SingleBeer