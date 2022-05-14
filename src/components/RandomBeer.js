
import { useState, useEffect } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})
  useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => {
        setRandomBeer(response.data);
      })
      .catch(e => console.log("error getting beer from API", e))
  }, [])


  return (
    <div>
      {randomBeer &&
        <>
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <h2>{randomBeer.name}</h2>
          <h5><i>{randomBeer.tagline}</i></h5>
          <p>First brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation level :{randomBeer.attenuation_level}</p>
          <p>Description : {randomBeer.description}</p>
          <p>Contributed by: {randomBeer.contributed_by}</p>
        </>
      }

    </div>
  )
}

export default RandomBeer