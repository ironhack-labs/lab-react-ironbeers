import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'
import './RandomBeerPage.css'

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
      <div className='random'>
               <img src={random.image_url}  alt=""/>
            <h3> {random.name}</h3>
        <p>{random.tagline}</p>
        <p> {random.first_brewed}</p>
        <p> {random.attenuation_level}</p>
        <p> {random.description}</p>
        <p>{random.contributed_by}</p>
        </div>
    </div>
  )
}

export default RandomBeerPage