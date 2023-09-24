import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function BeerDetails() {
    const {id} = useParams()
    const [beer, setBeer] = useState(null)
    
 

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response)=>{
            setBeer(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <>
    <Header></Header>
    <div>
        {!beer && <h2>...Loading</h2>}

        {beer && (
            <>
            <img src={beer.image_url} alt={beer.name}/>
            <h2>{beer.name}  {beer.attenuation_level}</h2>
            <h3>{beer.tagline}</h3>
            <h5>{beer.first_brewed}</h5>
            <h4>{beer.description}</h4>
            <h5>{beer.contributed_by}</h5>
            </>
        )}
    </div>
      </>
  )
}

export default BeerDetails