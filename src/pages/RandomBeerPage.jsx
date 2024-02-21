import axios from "axios";
import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function RandomBeerPage() {

    const [fetching, setFetching] = useState(true);
    const [randomBeer, setRandomBeer] = useState()


    
    useEffect(() => {
        // Get the random beer from the server
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => {
            console.log(response)
            setRandomBeer(response.data);
            setFetching(false)
        })
    
    }, []);


    if (fetching) {
        return <p>Loading...</p>
    }



    return (
        <>
        <div>
            <img src={randomBeer.image_url} />
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
            <p>{randomBeer.first_brewed}</p>
            <p>Attenuation level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Created by: {randomBeer.contributed_by}</p>
        </div>
        </>
    )
}
export default RandomBeerPage;
