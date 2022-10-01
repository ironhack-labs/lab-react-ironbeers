import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import BeerCardDetail from '../BeerCardDetail/BeerCardDetail';
// import { fetchBeerById } from '../../services/services';
import { fetchBeers } from '../../services/services';

const BeerDetail = () => {

  const { id } = useParams();

  const getBeers = async () => {
    const result = await fetchBeers();
    setBeers(result.data)
  }
  
  const [beers, setBeers] = useState([]);
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    getBeers()
    const beer = beers.find(beer => beer._id === id);
    if (beer) {
      setBeer(beer);
    } else {
      console.log('Esta cerveza no está disponible');
    }
  }, [beers, id]);

  return (
    <div className='container text-center'>
      <div>
        <BeerCardDetail {...beer} />
        <Link className='btn btn-primary' to='/beers'>Back</Link>
      </div>
    </div>
  );
}

export default BeerDetail;

// const [beer, setBeer] = useState();

  // useEffect(() => {
  //   getBeerById();
  // });
  
  // const getBeerById = async () => {
  //   const result = await fetchBeerById(id);
  //   console.log(result);
  //   setBeer(result);
  // }