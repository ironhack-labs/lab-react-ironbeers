/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react';  

function Beer () {
    const [foundBeer, setFoundBeer] = useState({}); 
    const { beerId } = useParams();
console.log(beerId)
  
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response=>{
            console.log(response.data)
             setFoundBeer(response.data)
            })
            .catch(error => {
                console.log("Error getting beer details", error);
              });
    
          }, [beerId]);
      
    return (
                   <div>
            <img alt="beerDetails" src={foundBeer.image_url}></img>
            <h1>{foundBeer.name}</h1>
            <p>{foundBeer.tagline}</p>
            <p>{foundBeer.first_brewed}</p>
            <p>{foundBeer.attenuation_level}</p>
            <p>{foundBeer.description}</p>
            <p>{foundBeer.contributed_by}</p>
            <Link to="/beers">Back</Link>
    
    </div>
    );
};

export default Beer;