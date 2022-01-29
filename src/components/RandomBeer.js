import { Fragment, React, useEffect, useState } from 'react';
import axios from 'axios';


const RandomBeer = () => {
   
    const [randomBeer, setRandomBeer] = useState(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=>{
      async function fetchData() {
        try {
          const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
          setRandomBeer(response.data);
          console.log(response.data)
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
      }
      fetchData();
      // setLoading(false);

    },[]);

    if (error) {
        return (
            <h1>Ups!! Something went wrong!</h1>
        )
    }

    if (loading) {
        return (
            <p>Looking for your beers...</p>
        )
        
    }

    if(!randomBeer) {
        return (
            <p>Ups! No beer...</p>
        )
    }


    return (
        <Fragment>
            <div  key={randomBeer._id}>
            <img src={randomBeer.image_url} alt="beer"/>
            <div>
              <h2>{randomBeer.name}</h2>
              <h2>Level: {randomBeer.attenuation_level}</h2>
              <p>{randomBeer.tagline}</p>
              <p>First brewed: {randomBeer.first_brewed}</p>
              <p>{randomBeer.description}</p>
              <p>{randomBeer.contributed_by}</p>
            </div>
          </div>
        </Fragment>
        
    )
}

export default RandomBeer;