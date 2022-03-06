import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './BeerDetails.css'


function BeerDetails() {

    const [beerDetails, setBeerDetails] = useState(null)

    const { id } = useParams();

    useEffect(() => {
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
    .then((response) => {

        let beerInfo = response.data;

      setBeerDetails(beerInfo)

      
    })
  
  }, [id])


  return (

    <div className="container">
{ beerDetails &&
    <div className="box">
        <img className="beer-img"src={beerDetails.image_url}/>
        <h2>{beerDetails.name}</h2>
        <p>{beerDetails.tagline}</p>
        <p><span>First Brewed:</span> {beerDetails.first_brewed}</p>
        <p><span>Attenuation Level:</span> {beerDetails.attenuation_level}</p>
        <p><span>Description:</span> {beerDetails.description}</p>
        <p><span>Created By:</span> {beerDetails.contributed_by}</p>
    </div>

}
    </div>

  )
}

export default BeerDetails