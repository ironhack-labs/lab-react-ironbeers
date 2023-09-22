import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BeerDetails() {
    const {beerId } = useParams()
    const [beer , setBeer] = useState(null)

    useEffect(()=>{
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((res) => {
                setBeer(res.data)
            })
    },[beerId])
    if (!beer) {
        return <div>Loading...i am gona put a spinner i promise</div>
    }
  return (
    <div>
        <h1>BeerDetails</h1>
        <img src={beer.image_url} alt="" />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation level: {beer.attenuation_level} </p>
        <p>Description: {beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
        

    </div>
  )
}

export default BeerDetails