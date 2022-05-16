import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';

function SingleBeer() {

    const [beer, setBeer] = useState([]);
    const params = useParams()
	const beerId = params.beerId

    useEffect(()=> {

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response =>{
            setBeer(response.data)
        })
        .catch(err => console.log(err))
    }, [])


    console.log(beerId)



  return (

    <>
        <img className="imgTwo" src={beer.image_url} alt="beer"/>
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.first_brewed}</p>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
    </>
        )

}
export default SingleBeer 