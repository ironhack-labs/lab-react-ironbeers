import React, { useEffect, useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BeerDetails() {

  const { Id } = useParams();
  const [beerDetails, setBeerDetails] = useState({undefined})
    // console.log(Id);

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${Id}`)
          .then((result) => {
            console.log(result.data)
            setBeerDetails(result.data);
          })
          .catch();
      }, [Id]);

      // if(!setBeerDetails){
      //     return <h1>Loading...</h1>
      //   }
  return (
    <div>
    <Header />

    <div>
    <img className="BeerImage row" src={beerDetails.image_url} alt='Beer pic'></img>
    <div>{beerDetails.name}</div>
    <div>{beerDetails.tagline}</div>
    <div>{beerDetails.first_brewed}</div>
    <div>{beerDetails.attenuation_level}</div>
    <div>{beerDetails.description}</div>
    <div>{beerDetails.contributed_by}</div>
    </div>
  


    </div>
  )
}
