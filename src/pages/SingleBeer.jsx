import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'



function SingleBeer() {
    const [beerDetails, setBeerDetails] =useState(null)
    const {beerId} =useParams();

    const getBeer = async () => {
        try {
          let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
          setBeerDetails(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      
  useEffect(() => {
    getBeer();
  }, []);


  return (
    <div className="BeerDetails">
    {beerDetails && (
      <>
        <h1>{beerDetails.name}</h1>
        <img src={beerDetails.image_url} alt='beer-details'/>
        <p>{beerDetails.tagline}</p>
        <p>{beerDetails.description}</p>
        <p>{beerDetails.first_brewed}</p>
        <p>{beerDetails.attenuation_level}</p>
        <p>{beerDetails.contributed_by}</p>
       
      </>
    )}
    </div>
  )}
 
export default SingleBeer