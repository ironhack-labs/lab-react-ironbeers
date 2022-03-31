import {React, useState, useEffect } from 'react';
import { beerDetail } from '../../services/BeersService';
import { useParams } from 'react-router';

const BeerDetail = ({ id, name, image, tagline}) => {
  const {id} = useParams();
  const [beer, setBeer] = useState(null)

  useEffect(()=>{
      beerDetail(id)
        .then(response => { setBeer(response) })
        .catch(err => console.log(err))

  }, [])
  return (
    <>
      <div className="container">
        <div key={id}>
          <img className="beer-img" src={image} alt={name} />
        </div>

        <div>
          <h2>{name}</h2>
          <p>{tagline}</p>
          <p>
            <strong>
              Contributed by: <small>{name}</small>
            </strong>
          </p>
        </div>
      </div>
    </>
  );
}

 
export default BeerDetail;