import React from 'react'
import axios from 'axios'

import {useState, useEffect} from "react"
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers/random'

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState ([])

    const getRandomBeer = async() => {

        try {
            let response = await axios.get(apiURL)
            setRandomBeer(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getRandomBeer()
    }, [])

  return (
    <div >
      <Header/>
        {randomBeer && (

        <div key={randomBeer._id}>
        <img src={randomBeer.image_url} alt="one random beer"></img>
        <h3>{randomBeer.name}</h3>
        <h4>{randomBeer.tagline}</h4>
        <p>{randomBeer.first_brewed}</p>
        <p>{randomBeer.description}</p>
        <p>{randomBeer.contributed_by} </p>
 </div>
        )}

    </div>
  )
}

export default RandomBeer