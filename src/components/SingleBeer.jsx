import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function SingleBeer() {
    const {id} = useParams();
    const [beerDetails, setBeerDetails] = useState([]);

    const getSingleBeer = async () => {

        try {
            const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
            setBeerDetails(response.data);

        } catch (error) {
            console.log(error)
        };
    }

        useEffect(() => {
            getSingleBeer();
          }, []);
   

  return (
    <div>
    <NavBar/>
            <img src={beerDetails.image_url} alt="beer"></img>
            <h1>{beerDetails.name}</h1>
            <p>{beerDetails.tagline}</p>
            <p>{beerDetails.first_brewed}</p>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>{beerDetails.contributed_by}</p>
    </div>
  )
}

export default SingleBeer 

/* 
image
name
tagline
first_brewed
attenuation_level
description
contributed_by
 */
