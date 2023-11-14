import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function RandomBeersPage() {
    const [randomBeers, setRandomBeers] = useState()

  useEffect(()=>{
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then((response)=> {
      setRandomBeers(response.data);
      console.log(response.data)
    })
  }, [])

  if (!randomBeers) {
    return <div>Loading...</div>;}

    return(
        <div>
        <h1>Random Beer</h1>
  
        <img src={randomBeers.image_url} alt={randomBeers.name} />
            <p>{randomBeers.name}</p>
            <p>{randomBeers.tagline}</p>
            <p>{randomBeers.first_brewed}</p>
            <p>{randomBeers.attenuation_level}</p>
            <p>{randomBeers.description}</p>
            <p>{randomBeers.contributed_by}</p>
  
            <Link to="/beers"><button>All Beers</button></Link>
      </div>

    )
}

export default RandomBeersPage;
