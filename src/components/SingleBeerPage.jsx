import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import './SingleBeerPage.css'

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
      <div className='single'>
            <img src={view.image_url}  alt=""/>
            <div className='texto'>
            <h3>{view.name}</h3>
        <p> {view.tagline}</p>
        <p className='fecha'> {view.first_brewed}</p>
        <p className='numero'> {view.attenuation_level}</p>
        <p> {view.description}</p>
        <p> {view.contributed_by}</p>
        </div>
        </div>
    </div>
  )
}

export default SingleBeerPage