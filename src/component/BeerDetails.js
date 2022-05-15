import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Header from "./Header";


function BeerDetails () {

    const beerIdfromBeers = useParams();
    const [beer, setBeer] = useState([]);

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerIdfromBeers.id}`)
        .then( response => {
            setBeer(response.data)  
            console.log(response.data)
        })
        .catch(err => console.log('Error getting specific Beer from API', err))
        })


    return (
        <div>
            <Header/>
            <h1>Beer Details</h1>
            <img src={beer.image_url} alt="beer"></img>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.first_breed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
            
        </div>
    )
}

export default BeerDetails;


