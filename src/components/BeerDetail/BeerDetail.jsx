import React from 'react';
import { useParams } from 'react-router-dom';

function BeerDetail({ beersData }) {

  //Duda para Cristian: ¿Por qué aquí no es { _id }, que es como se llama la clave realmente las beers?
  const { id } = useParams();

  return (
    <>
      {beersData.filter((beer) => beer._id.includes(id)).map((beer) => (
        <div className='d-flex container my-4 align-items-center justify-content-center pb-3 border-bottom'>
          <img src={beer.image_url} alt="beerImage" style={{ width: 50 }} />
          <div className='ms-5'>
            <h3>{beer.name}</h3>
            <h5 className='text-secondary'>{beer.tagline}</h5>
            <h5 className='text-dark'>{beer.first_brewed}</h5>
            <h5 className='text-dark'>{beer.attenuation_level}</h5>
            <h5 className='text-dark'>{beer.description}</h5>
            <p className='text-secondary'>{beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </>
  );
}
export default BeerDetail;