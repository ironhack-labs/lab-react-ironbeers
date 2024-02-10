import { useState, useEffect } from 'react';
import { getRandomBeer } from '../services/beerService';

const RandomBeerPage = () => {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    getRandomBeer()
    .then(response => {
      console.log('Random Beer Response:', response);
      // Verificar si la respuesta es un objeto y tiene la estructura esperada
      if (response) {
        setRandomBeer(response);
        console.log('Random Beer Set:', response.data);
      } else {
        console.error('La respuesta de la API no contiene datos válidos:', response);
      }
    })
    .catch(error => {
      console.error('Error al obtener cerveza al azar:', error);
    });
}, []);
  
  if (!randomBeer) return 'Loading...'


  return (
    <div>
      <h1>Random Beer</h1>
        <div key={randomBeer._id} >
          <img src={randomBeer.image_url} alt={randomBeer.name} />
          <h2>{randomBeer.name}</h2>
          <p>{randomBeer.tagline}</p>
          <p>First Brewed: {randomBeer.first_brewed}</p>
          <p>Attenuation Level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Contributed By: {randomBeer.contributed_by}</p>
        </div>
    </div>
  );
};

export default RandomBeerPage;
