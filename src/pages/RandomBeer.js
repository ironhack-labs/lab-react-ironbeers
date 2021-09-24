import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';


function RandomBeer(props) {
  const[randomBeer, setRandomBeer] = useState("")
  const {name, image_url, tagline, first_brewed, attenuation_level, description, contributed_by} = randomBeer


  useEffect(()=>{
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((object)=>{
        console.log('Random: ', object.data)
        setRandomBeer(object.data)
      })
  }, [])

  return (
    <div className="RandomBeer row justify-content-center">
        <Navbar/>
        <div className="card col-3">
        <img src={image_url} alt={name}/>
        <h3>{name} </h3>
        <p>{tagline}</p>
        <p>{first_brewed}</p>
        <p>{attenuation_level}</p>
        <p>{description}</p>
        <p>{contributed_by}</p>
        </div>
      </div>
  );
}

export default RandomBeer;
