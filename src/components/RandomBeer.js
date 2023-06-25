import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching random beer:', error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} />
      <h3>{beer.name}</h3>
      <p>{beer.tagline}</p>
      <p>First Brewed: {beer.first_brewed}</p>
      <p>Attenuation Level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;


// with fetch method !!!

// import React, { useEffect, useState } from 'react';

// const RandomBeer = () => {
//   const [beer, setBeer] = useState(null);

//   useEffect(() => {
//     fetch('https://ih-beers-api2.herokuapp.com/beers/random')
//       .then((response) => response.json())
//       .then((data) => setBeer(data));
//   }, []);

//   if (!beer) {
//     return <div>Please wait my friend...</div>;
//   }

//   return (
//     <div>
//       <img src={beer.image_url} alt={beer.name} />
//       <h3>{beer.name}</h3>
//       <p>{beer.tagline}</p>
//       <p>First Brewed: {beer.first_brewed}</p>
//       <p>Attenuation Level: {beer.attenuation_level}</p>
//       <p>{beer.description}</p>
//       <p>Contributed by: {beer.contributed_by}</p>
//     </div>
//   );
// };

// export default RandomBeer;