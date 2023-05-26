import { useEffect, useState } from 'react';

function BeerDetails({ match }) {
  const [beer, setBeer] = useState(null);
  const beerId = match.params.beerId;

  useEffect(() => {
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={beer.image_url} alt={beer.name} style={{ height: '300px' }} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>Description: {beer.description}</p>
      <p>Contributed by: {beer.contributed_by}</p>
    </div>
  );
}

export default BeerDetails;
