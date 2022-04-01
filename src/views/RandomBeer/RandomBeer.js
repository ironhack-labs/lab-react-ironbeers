import React,{ useState, useEffect } from 'react';

import Itemview from '../../components/ItemView/ItemView';
import {beerRandom} from './../../services/BeersService'

export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState();

    useEffect(() => {
        beerRandom()
        .then(response => { setRandomBeer(response)})  
    }, []);
    
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
