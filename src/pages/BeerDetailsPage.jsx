import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null)
  const params = useParams()
  useEffect(() => {
    
    fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)  
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

  //<div className="d-flex justify-content-center align-items-center vh-100">

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center ">

        <h1 style={{textAlign: "center"}} className='m-4'>Detalles de la Cerveza</h1>

        <div className="card mb-3 align-items-center p-5" style={{width:"800px"}}>
          <img 
            src={beer.image_url} 
            alt={beer.name}
            className='card-img-top mb-3'
            style={{maxWidth: "100px", heigth:"auto"}}
          />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>Primera elaboración: {beer.first_brewed}</p>
          <p>Atenuación: {beer.attenuation_level}</p>
          <p>Descripción: {beer.description}</p>
          <p>Contribuido por: {beer.contributed_by}</p>

        </div>

      </div>
    </>
  );

}

export default BeerDetailsPage;
