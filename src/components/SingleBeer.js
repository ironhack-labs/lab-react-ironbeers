import React from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"; 
import { useState, useEffect } from "react"; 
import NavBar from './NavBar';


function SingleBeer() {
	const params = useParams()
	const id = params.id
    const [beers, setBeers] = useState([])
  
    useEffect((id) => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => {
                setBeers(response.data)
            })
    }, []);
    
    return (
      
        <div>
            <NavBar/>
            <img src={beers.image_url} alt={beers.name} />
            <h2>{beers.name}</h2>
            <p>{beers.tagline}</p>
            <p>{beers.first_brewed}</p>
            <p>{beers.attenuation_level}</p>
            <p>{beers.description}</p>
            <p>{beers.contributed_by}</p>
        </div>
    )
}

export default SingleBeer