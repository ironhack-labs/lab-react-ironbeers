import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './Header'

export default function RandomBeer() {

  const [randomBeer, setrandomBeer] = useState({undefined})
  const { Id } = useParams();
  // console.log(Id);

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((result) => {
            console.log(result.data)
            setrandomBeer(result.data);
          })
          .catch();
      }, []);


  return (
    <div>
    <Header />

    <div>
    <img className="BeerImage row" src={randomBeer.image_url} alt='Beer pic'></img>
    <div>{randomBeer.name}</div>
    <div>{randomBeer.tagline}</div>
    <div>{randomBeer.first_brewed}</div>
    <div>{randomBeer.attenuation_level}</div>
    <div>{randomBeer.description}</div>
    <div>{randomBeer.contributed_by}</div>
    </div>
  
    

    RandomBeer</div>
  )
}
