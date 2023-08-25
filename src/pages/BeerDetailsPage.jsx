import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


function BeerDetailsPage() {
    const {beerId} = useParams();
    const [ foundBeer, setFoundBeer] = useState('')

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) => {
            setFoundBeer(response.data);
            console.log(response.data)
        })
    }, [beerId])
    
    return(
        <div>
            <img src={foundBeer.image_url} alt="" />
            <h2>{foundBeer.name}</h2>
            <h6>{foundBeer.tagline}</h6>
            <p>Date of first brew: {foundBeer.first_brewed}</p>
            <p>Attenuation level: {foundBeer.attenuation_level}</p>
            <p>Description: {foundBeer.description}</p>
            <p>Created by: {foundBeer.contributed_by}</p>
        </div>
    )
}

export default BeerDetailsPage;
