import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null)
  const params = useParams()
  useEffect(() => {
    
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)  
      .then((res) => res.json())
      .then((data) => {
        setBeer(data); 
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  if(!beer){
    return <h1>Loading...</h1>
  }

  return (

    <div>
      
      <h1>Detalles de la Cerveza</h1>
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>Primera elaboración: {beer.first_brewed}</p>
      <p>Atenuación: {beer.attenuation_level}</p>
      <p>Descripción: {beer.description}</p>
      <p>Contribuido por: {beer.contributed_by}</p>

    </div>

  );

}

export default BeerDetailsPage;
