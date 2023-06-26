import axios from "axios";
import { useEffect, useState } from "react";

function RandomBeer(){

    const [randomBeer, setRandomBeer] = useState(0)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/random`)
            .then((response) => {
                // console.log(response);
                return(setRandomBeer(response.data))
            })
            .catch(e => console.log(e))
    }, [])
    // console.log(randomBeer);

    return(
        <div key={randomBeer._id}>
            <img src={randomBeer.image_url}/>
            <h1>{randomBeer.name}</h1>
            <h3>{randomBeer.tagline}</h3>
            <p>{randomBeer.first_brewed}</p>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>

        </div>
    )
}

export default RandomBeer;