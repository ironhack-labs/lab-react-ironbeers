import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {

    const [beer, setBeers] = useState([])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                setBeers(response.data);
            })
    }, [])

    return (
        <div>
            <Header />
             <img src={beer.image_url} alt="" /> 
             <h1>{beer.name}</h1>
                    <h2>{beer.tagline}</h2>
                    <p>{beer.first_brewed}</p>
                    <h3>{beer.attenuation_level}</h3>
                    <p>{beer.description}</p>
                    <p>Created by:{beer.contributed_by}</p>
   </div>
    )
}

export default RandomBeer;