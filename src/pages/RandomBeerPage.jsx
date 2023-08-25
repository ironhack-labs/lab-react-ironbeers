import axios from "axios";
import { useState, useEffect } from "react";


function RandomBeersPage() {
    const [beer, setBeer] = useState([]);
    
    useEffect(() => {
        axios
        .get("https://ih-beers-api2.herokuapp.com/beers/random")
        .then((response) => {
            setBeer(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log("Error fetching API data (random beer): ", error);
        });
    }, []);
    
    return (
        <div>
        <h1>Random Beer Page</h1>
        <img src={beer.image_url} alt={beer.name} />
        <h2>{beer.name}</h2>
        <h3>{beer.tagline}</h3>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        </div>
    );
}

export default RandomBeersPage;
