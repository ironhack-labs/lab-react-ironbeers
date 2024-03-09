import React, { useEffect, useState } from 'react'
import DetailBox from '../components/DetailBox';
import BeerService from '../service/BeerService';

export default function RandomBeerPage() {
    const [randBeer, setRandBeer] = useState();
    const [loadingBeer, setLoadingBeer] = useState(true);
    const service = new BeerService();
  
    const getRandBeer = async () => {
      const beerApi = await service.getRandomBeer();
      setRandBeer(beerApi);
      setLoadingBeer(false);
    }
  
    useEffect(() =>{
        if(loadingBeer) getRandBeer();
    }, [])

    // useEffect(() => {
    //     return setRandBeer(null);
    // }, [])
  
    // console.log({randBeer: randBeer});
    
    return (
      <div>
          {!loadingBeer ? <DetailBox {...randBeer} /> : <h3>Loading...</h3>}
      </div>
    )
}

