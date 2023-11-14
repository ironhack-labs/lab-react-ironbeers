import axios from "axios";

import { useEffect, useState } from "react";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers/random"

function RandomBeersPage(props) {

    const [randomBeer, setRandomBeer] = useState()
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        axios.get(API_URL)
            .then((response) => {
                setRandomBeer(response.data)
                setFetching(false)
            })
            .catch((error) => console.log('Error' + error))
    }, [])

    return (
        <div className="beer-details">
            {fetching ? <p>Loading ...</p> :
                <div>
                    <img src={randomBeer.image_url} alt={`${randomBeer.name} bottle`}  />
                    <div className="text-beer-details">
                        <h1>{randomBeer.name}</h1>
                        <h2>{randomBeer.tagline}</h2>
                        <p>{randomBeer.first_brewed}</p>
                        <h2>{randomBeer.attenuation_level}</h2>
                        <p>{randomBeer.description}</p>
                        <p>{randomBeer.contributed_by}</p>
                    </div>
                </div>
            }
        </div >
    )
}

export default RandomBeersPage;
