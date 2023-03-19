import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Beer from '../../components/Beer/Beer';
import Header from '../../components/Header/Header';
import { getBeer } from '../../services/BeersService';

const BeerDetail = () => {
  const { beerId } = useParams()

  const [ loading, setLoading ] = useState(true)
  const [ beer, setBeer ] = useState(null)

  const fetchBeer = useCallback(() => {
    getBeer(beerId)
      .then(response => {
        setLoading(false)
        setBeer(response)
      })
  }, [beerId])

  useEffect(() => {
    fetchBeer()
  }, [fetchBeer])

  return (
    <div className='BeerDetail'>
      <Header />
      {loading && <p>Loading...</p>}
      {!loading && <Beer beer={beer}/>}
    </div>
  );
};

export default BeerDetail;