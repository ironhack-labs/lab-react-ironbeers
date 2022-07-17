import React from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function BeerDetails() {
    const params = useParams();
    const id = params.id
   //console.log(params)

    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(response => {
            console.log(response.data)

            setBeer(response.data)        
        })
        .catch(err => console.log(err))
    },[])
    //alternative(without filter and map:) `https://ih-beers-api2.herokuapp.com/beers${id}`
    //with this URL we dont need useEffect
  return (
    <div>
    {beer.filter(beer => {
        return  beer._id === id
    }).map(beer => (
        <div key={beer._id}>
        <img src={beer.image_url} height='120' alt='beerPic' />
        <h1>Name: {beer.name}</h1>
        <h2>Tagline: {beer.tagline}</h2>
        <h3>First Brewed: {beer.first_brewed}</h3>
        <h4>Attenuation Level: {beer.attenuation_level}</h4>
        <p>Description: {beer.description}</p>
        <h5>contributed by: {beer.contributed_by}</h5>
        </div>
    ))}
    </div>
  )
}

