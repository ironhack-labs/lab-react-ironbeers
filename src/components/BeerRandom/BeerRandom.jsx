import React, { useEffect, useState } from 'react';
import BeerCardDetail from '../BeerCardDetail/BeerCardDetail';
import { fetchRandomBeer } from '../../services/services';
import { Link } from 'react-router-dom';

const BeerRandom = () => {

  const [beer, setBeer] = useState([]);

  useEffect(() => {
    getRandomBeer()
  }, []);

  const getRandomBeer = async () => {
    const result = await fetchRandomBeer();
    if (result) {
      setBeer(result.data);
    } else {
      console.log('Esta cerveza no está disponible');
    }
  }

  return (
    <div className='container text-center'>
      <div>
        <BeerCardDetail {...beer} />
        <Link className='btn btn-primary' to='/'>Back</Link>
      </div>
    </div>
  );
}

export default BeerRandom;
