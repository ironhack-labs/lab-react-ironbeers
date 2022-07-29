import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect( () => {
        axios
        .get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then((response) => {
          setRandomBeer(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }, []);
  
      console.log (randomBeer)

    return (
        <>
            {randomBeer === null 
            ? <p>Loading</p>
            : <>
            <h1>This are the details of {randomBeer.name}</h1>
            <img src={randomBeer.image_url}/> 
            <h1>Name: {randomBeer.name}</h1>
            <p>Tagline: {randomBeer.tagline}</p>
            <p>First brewed: {randomBeer.first_brewed}</p>
            <p>Attenuation level: {randomBeer.attenuation_level}</p>
            <p>Description: {randomBeer.description}</p>
            <p>Contributed by: {randomBeer.contributed_by}</p>
            </>
            }
        </>
    )
}

export default RandomBeer