import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const {beerId} = useParams();
    const [ beer, setBeer ] = useState([]);
    
    useEffect(() =>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((response) =>{
            setBeer(response.data);
        })
    }, []);

    return(
        <div key={beer._id}>
            <img src={beer.image_url} alt="" />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.first_breed}</p>
            <p>{beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetailsPage;
