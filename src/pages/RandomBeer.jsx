import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import axios from 'axios'

function RandomBeer() {

    const [beer, setBeer] = useState([])    

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((res) => {
            setBeer(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

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

export default RandomBeer