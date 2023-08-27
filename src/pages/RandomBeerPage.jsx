import { useState, useEffect } from 'react';


const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    // Fetch a random beer from the API
    fetch('https://ih-beers-api2.herokuapp.com/beers/random')
      .then(response => response.json())
      .then(data => setRandomBeer(data))
      .catch(error => console.error('Error fetching random beer:', error));
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by
  } = randomBeer;

  return (
    <div>
      <img src={image_url} alt={name}/>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <p>First Brewed: {first_brewed}</p>
      <p>Attenuation Level: {attenuation_level}</p>
      <p>Description: {description}</p>
      <p>Contributed by: {contributed_by}</p>
    </div>
  );
};

export default RandomBeerPage;
