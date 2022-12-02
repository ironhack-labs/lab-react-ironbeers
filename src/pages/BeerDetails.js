import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from 'axios';

function BeerDetails() {
    const {beerId} = useParams();
    const {beer, setBeer} = useState({});

    useEffect(() => {
        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(response => setBeer(response.data))
        .catch(err => console.log(err))
    }, [beerId])

    return (
        <div key={beer._id}>
            <img src={beer.image_url} alt="beer" height= "500" width="220"/>
        <div> 
            <ul>
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>{beer.attenuation_level}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p><b>Created by:</b>{beer.name}</p>
            </ul>
        </div>
    </div>
    );
}

export default BeerDetails;