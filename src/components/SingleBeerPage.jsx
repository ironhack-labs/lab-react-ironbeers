import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

function SingleBeerPage() {
const [view, setView]=useState([]);

    const {beerId}=useParams();

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response=>{
           setView(response.data)
           console.log(response.data)
        })
    },[])


  return (
    <div>
            <img src={view.image_url}  alt=""/>
            <h3> name  {view.name}</h3>
        <p>tagline {view.tagline}</p>
        <p>first_brewed {view.first_brewed}</p>
        <p>attenuation_level {view.attenuation_level}</p>
        <p>description {view.description}</p>
        <p>contributed_by{view.contributed_by}</p>
    </div>
  )
}

export default SingleBeerPage