import React, { useEffect, useState } from 'react'
import DetailBox from '../components/DetailBox';
import BeerService from '../service/BeerService';

export default function RandomBeerPage() {
    const [randBeer, setRandBeer] = useState();
    const service = new BeerService();
  
    const getRandBeer = async () => {
      const beerApi = await service.getRandomBeer();
      setRandBeer(beerApi);
    }
  
    useEffect(() =>{
        getRandBeer();
    }, [])

    useEffect(() => {
        return setRandBeer()
    }, [])
  
    console.log({beer: randBeer});
    
    return (
      <div>
          {!!randBeer ? <DetailBox {...randBeer} /> : <h3>Loading...</h3>}
      </div>
    )
}

