import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function SingleBeer() {
    
    const [beer, setBeer] = useState([])    

    const {beerId} = useParams()

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((res) => {
            setBeer(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [beerId])

  return (
    <div>
        <Header/>

            <img src={beer.image_url} alt="beername" />
            <h1>Name: {beer.name}</h1>
            <p>Tagline: {beer.tagline}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Countributed by: {beer.contributed_by}</p>

    </div>
  )
}

export default SingleBeer