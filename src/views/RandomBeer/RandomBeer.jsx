import React, { useCallback, useEffect, useState } from 'react';
import Beer from '../../components/Beer/Beer';
import Header from '../../components/Header/Header';
import { getRandomBeer } from '../../services/BeersService';

const RandomBeer = () => {
  const [ loading, setLoading ] = useState(true)
  const [ beer, setBeer ] = useState(null)

  const fetchBeer = useCallback(() => {
    getRandomBeer()
      .then(response => {
        setLoading(false)
        setBeer(response)
      })
  }, [])

  useEffect(() => {
    fetchBeer()
  }, [fetchBeer])

  return (
    <div className='RandomBeer'>
      <Header />
      {loading && <p>Loading...</p>}
      {!loading && <Beer beer={beer}/>}
    </div>
  );
};

export default RandomBeer;