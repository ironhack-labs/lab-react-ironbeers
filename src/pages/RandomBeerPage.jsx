import axios from "axios";
import { useState, useEffect } from "react";

function RandomBeerPage() {
  const [beer, setBeer] = useState(null);

  const fetchRandomBeer = () => {
    axios
     .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
     .then((response) => {
        const oneBeer = response.data;
        setBeer(oneBeer);
      })
     .catch((error) => console.log(error));
  };

  /* I used the useEffect hook that calls the fetchRandomBeer function when the component mounts, because otherwise it would be randomly changing without stop. I call the same function in the button to generate another random beer*/ 
  
  useEffect(() => {
    fetchRandomBeer();
  }, []);

  return (
    <div>
      {beer && (
          <article key={beer.id}>
            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>Description: {beer.description}</p>
            <p>Tips: {beer.brewers_tips}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Expires at: {beer.expireAt}</p>
          </article>
      )}
      <button onClick={fetchRandomBeer}>Get another beer</button>
    </div>
  )
}

export default RandomBeerPage