import React,{ useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import Itemview from '../../components/ItemView/ItemView';
import {beerRandom} from './../../services/BeersService'

export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState();
    const { key } = useLocation()
    
    useEffect(() => {
        beerRandom()
        .then(response => { 
          setRandomBeer(response)
        }) 
    }, [key]);
    //console.log(key)
    
  return (
    <div>
      {randomBeer ? 
        <Itemview item={randomBeer} />
        :
        <div className="spinner-border spinner" role="status">
        <p>...loading</p>
        </div> }  
    </div>
  )
}
