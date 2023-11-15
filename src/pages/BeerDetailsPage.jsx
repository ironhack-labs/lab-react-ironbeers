import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    
    const {beerId} = useParams()
    
    const [beer, setBeer] = useState({})

    const API_URL = "https://ih-beers-api2.herokuapp.com/beers"

    
    useEffect(() => {
        axios.get(`${API_URL}/${beerId}`)
        .then((response) => {
            console.log(response.data)
            setBeer(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <div>
            <img src={beer.image_url} alt="Beer image" className="random-beer-img"/>
            <h1>{beer.name}</h1>
            <p>{beer.attenuation_level}</p>
            <p>{beer.tagline}</p>
            <b>{beer.first_brewed}</b>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    )
}

export default BeerDetailsPage;
