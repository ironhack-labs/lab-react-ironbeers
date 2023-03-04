import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'

function RandomBeerPage() {
    const [random, setRandom]=useState([]);



    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then(response=>{
           setRandom(response.data)
           console.log(response.data)
        })
    },[])

  return (
    <div>
               <img src={random.image_url}  alt=""/>
            <h3> name  {random.name}</h3>
        <p>tagline {random.tagline}</p>
        <p>first_brewed {random.first_brewed}</p>
        <p>attenuation_level {random.attenuation_level}</p>
        <p>description {random.description}</p>
        <p>contributed_by{random.contributed_by}</p>
    </div>
  )
}

export default RandomBeerPage