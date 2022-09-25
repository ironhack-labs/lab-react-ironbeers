import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function RandomBeerPage() {
    const API_URL = process.env.REACT_APP_BASE_URL; 
    const [randomBeer, setRandomBeer] = useState({});

    useEffect(()=>{
        axios.get(`${API_URL}/beers/random`)
        .then(response => setRandomBeer(response.data))
        .catch(err => console.log(err))
        // eslint-disable-next-line 
    }, [])

    if(Object.keys(randomBeer).length === 0){
        return <>
            <p>Loading...</p>
        </>
    }


    return (
        <div>

            <div>
            <h1>Random Beer</h1>
            <h3>Beer Details</h3>
            <br/>

            <div className="beersImg">
                <img src={randomBeer.image_url} height="200" alt="beer" />
            </div>

            <div>
            <h3>{randomBeer.name}</h3>
                <h6>{randomBeer.tagline}</h6>
                <p>{randomBeer.first_brewed}</p>
                <p>{randomBeer.attenuation_level}</p>
                <p>{randomBeer.description}</p>
                <p>{randomBeer.contributed_by}</p>
            </div>

            </div>

            <Link to="/">Back</Link> 
        </div>

    )
}

export default RandomBeerPage;