import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function RandomBeersPage() {
    const {beerId} = useParams();
    const [ randomBeer, setRandomBeer] = useState('')

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((response) => {
            setRandomBeer(response.data);
            console.log(response.data)
        })
    }, [beerId])
    
    return(
        <div>
            <img src={randomBeer.image_url} alt="" />
            <h2>{randomBeer.name}</h2>
            <h6>{randomBeer.tagline}</h6>
            <p>Date of first brew: {randomBeer.first_brewed}</p>
            <p>Attenuation level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Created by: {randomBeer.contributed_by}</p>
        </div>
    )
}

export default RandomBeersPage;
