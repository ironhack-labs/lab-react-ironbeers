import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const BeerDetailsPage = () => {
  const { beerId } = useParams();
  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    // Fetch data for the specific beer using the beerId parameter
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => response.json())
      .then(data => setBeerDetails(data))
      .catch(error => console.error('Error fetching beer details:', error));
  }, [beerId]);

  if (!beerDetails) {
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
  } = beerDetails;

  return (
    <div>
      <img src={image_url} alt={name}/>
      <h1>{name}</h1>
      <p>{tagline}</p>
      <p>First Brewed: {first_brewed}</p>
      <p>Attenuation Level: {attenuation_level}</p>
      <p>Description: {description}</p>
      <p>Created by: {contributed_by}</p>
    </div>
  );
};

export default BeerDetailsPage;

