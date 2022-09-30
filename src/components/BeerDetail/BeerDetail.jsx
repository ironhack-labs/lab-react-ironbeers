import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchBeerId, fetchRandomBeer} from '../../services/beer-services';
import BeerCardDetail from '../BeerCardDetail/BeerCardDetail';

function BeerDetail() {
  const { id } = useParams()
  const [beer, setBeer] = useState()


  useEffect(() =>{
    if (id) {
      fetchBeerId(id)
      .then(beer => {
        setBeer(beer.data)
      })
      } else {
        fetchRandomBeer()
        .then(randomBeer => 
          setBeer(randomBeer.data))
      }
  },[id])


  return (
    <div>
      { !beer ?
      <p>Beer doesn't exist</p>
      :
      <BeerCardDetail {...beer}/>
      }
    </div>
    )
}

export default BeerDetail;