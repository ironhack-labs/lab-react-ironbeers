import React, { useCallback, useEffect, useState } from 'react';
import BeerDetailed from '../../components/beers/BeerDetailed';
import { randomBeer } from '../../services/BeerService';

const RandomBeer = () => {

const [loading, setLoading] = useState(true)
const [beer, setBeer] = useState(null)

const getRandom = useCallback(() => {
    randomBeer()
    .then((beer)=>{
        setLoading(false)
        setBeer(beer)
    })
    .catch((err)=> console.error(err))
}, [])

useEffect(() => {
    getRandom()
  }, [getRandom])

  


    return (
    <div>
      {loading ? <p>Loading...</p> : <BeerDetailed beer={beer} />}
    </div>

    );
};

export default RandomBeer;