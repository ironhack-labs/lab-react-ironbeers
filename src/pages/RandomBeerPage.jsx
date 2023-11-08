import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL="https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeersPage() {

    const[beer, setBeer] = useState();
    const {beerId} = useParams();

    useEffect(()=>{
      axios.get(API_URL)
      .then((response)=>{
        setBeer(response.data)
      })
      .catch((error) => console.log(error));
    }, []);

    return(
        <div>
        {!beer && <img src="./src/assets/loading-icon.png"></img>}
        {beer && (
        <div>
            <img src={beer.image_url} alt="Beer Image" />
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            <h3>{beer.tagline}</h3>
            <h4>{beer.attenuation_level}</h4>
            <h2><i>{beer.contributed_by}</i></h2>
        </div>
    )}
    </div>
    )
}

export default RandomBeersPage;