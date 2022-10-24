import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import NavBar from './NavBar';

function RandomBeer() {

    const { beerId } = useParams();

    const [randomBeer, setRandomBeer] = useState({});
  
  
    useEffect(() => {
      axios.get('https://ih-beers-api2.herokuapp.com/beers/' , beerId)
        .then( response => {
            const result =  setRandomBeer(response.data);
        Math.floor(Math.random(beerId) * result.length);
        })
        .catch(e => console.log("error getting beers from API", e));
    }, []);


    return(
        <>
        <NavBar />

            <h1>Random beer</h1>

            <img src={randomBeer.image_url} />
            <h3>Name: {randomBeer.name}</h3>
            <p>Tagline: {randomBeer.tagline}</p>
            <p>First Brewed: {randomBeer.first_brewed} </p>
            <p>Attenuation Level: {randomBeer.attenuation_level} </p>
            <p>Description:{randomBeer.description} </p>
            <p>Contribubted by: {randomBeer.contributed_by}</p>
        </>
    )
}

export default RandomBeer

