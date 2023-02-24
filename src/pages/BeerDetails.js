import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function BeerDetails() {
    const { id } = useParams()

    const [beer, setBeer] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then(response => {
            setBeer(response.data)             
            })
    }, [])


    return ( 
       <div>
            <img src={beer.image_url} alt="beer"/>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <h4>{beer.first_brewed}</h4>
            <h4>{beer.attenuation_level}</h4>
            <p>{beer.description}</p>
            <h3>Created by: {beer.contributed_by}</h3>
       </div>
     );
}

export default BeerDetails;