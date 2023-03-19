import React, { useCallback, useEffect, useState } from 'react';
import { getBeers } from '../../services/BeersService';
import BeerForList from '../BeerForList';
import './index.css'

const BeersList = () => {
  const [beers, setBeers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchBeers = useCallback(() => {
    getBeers()
      .then(response => {
        setLoading(false)
        setBeers(response)
      })
  }, [])

  useEffect(() => {
    fetchBeers()
  }, [fetchBeers])

  return (
    <div className='BeersList'>
      {loading && <p>loading...</p>}
      {!loading && <div>
          {beers.map(beer => {
            return <BeerForList beer={beer} key={beer._id}/>
          })}
        </div>  
      }
    </div>
  );
};

export default BeersList;