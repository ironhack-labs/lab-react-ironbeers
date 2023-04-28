import Header from "../components/Header";
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios"


const BeerDetails = (props) => {

    const { beerId } = useParams()

    const [beer, setBeer] = useState(null)

    const url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`

    useEffect(() => {
         axios.get(url)
            .then(res => {
                setBeer(res.data)
                console.log(res.data)
            })

    }, [])

    const imgStyle = { 
        width: 50,
        fontSize: 10

    }



  return (
    <div>
        <Header />

        {beer && 
        <div>
            <img style={imgStyle} src={beer.image_url} />
            <h1>{beer.name}</h1>
            <h4>{beer.tagline}</h4>
            <p>{beer.first_brewed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <h1>{beer.contributed_by}</h1>
        </div>
        }
           
    
    </div>
  )
}

export default BeerDetails