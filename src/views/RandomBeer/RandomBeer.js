import React,{ useState, useEffect } from 'react';
import {beerRandom} from './../../services/BeersService'
export default function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState();

    useEffect(() => {
        beerRandom()
        .then(response => { setRandomBeer(response)})   
       
    }, []);
  return (
    <div>
        <pre>{JSON.stringify(randomBeer)}</pre>
    </div>
  )
}
