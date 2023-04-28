import Header from "../components/Header";
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios, { Axios } from "axios"

const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState(null)
    const url = `https://ih-beers-api2.herokuapp.com/beers/random` 


    useEffect(() => {
       axios.get(url)
       .then(res =>{
        setRandomBeer(res.data)
        console.log(res.data)
       })
    })


    const imgStyle = { 
      width: 50,
      fontSize: 10

  }
    
    return (
    <div>
        <Header />
        {randomBeer && 
        
          <div>
            <img style={imgStyle} src={randomBeer.image_url} />
            <h1>{randomBeer.name}</h1>
            <h4>{randomBeer.tagline}</h4>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <h1>{randomBeer.contributed_by}</h1>
        </div>
        }

    </div>
  )
}

export default RandomBeer