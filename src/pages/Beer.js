import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function Beer() {
const [beers, setBeers] = useState([]);

useEffect(() => {
    axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            console.log('response.data', response.data)
            setBeers(response.data)
        })
}, [])

  return (
    <>
    <header><a href="/">Home</a></header>
    <div>
        {beers.map((beer) => (
            <div key={beer._id}>
            <img src={beer.image_url} alt="Bierflasche" />
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <h4>Created by: {beer.contributed_by}</h4>
            <Link to={`/beers/${beer._id}`}>Click for Details</Link>
            </div>
        ))}
    </div>
    </>
  )
}
