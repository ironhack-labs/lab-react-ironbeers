import { useEffect, useState } from "react";
import axios from 'axios'


const API_URL="https://ih-beers-api2.herokuapp.com/beers/random";


function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState(null);
    const [fetching, setFetching] = useState(true);

    useEffect(()=>{
        axios.get(API_URL).then((response)=>{
            setRandomBeer(response.data);
            setFetching(false)
        })
        .catch((error)=>console.log(error))

    }, [])

    return(
        <div>
            {fetching ? (<p>Loading...</p>) :
            (<div>
                <h1>{randomBeer.name}</h1>
                 <img src={randomBeer.image_url} alt={randomBeer.name} />
                 <p>Tagline: {randomBeer.tagline}</p>
                 <p>First Brewed: {randomBeer.first_brewed}</p>
                 <p>Attenuation Level: {randomBeer.attenuation_level}</p>
                 <p>Description: {randomBeer.description}</p>
                 <p>Contributed By: {randomBeer.contributed_by}</p>
            </div>

            )}
        </div>
    )


}

export default RandomBeersPage;
