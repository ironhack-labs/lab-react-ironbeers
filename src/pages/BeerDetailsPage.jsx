import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BeerService from '../service/BeerService';
import DetailBox from '../components/DetailBox';

export default function BeerDetailsPage() {
  const [beer, setBeer] = useState();
  const { beerId } = useParams();
  const service = new BeerService();

  const getBeer = async () => {
    const beerApi = await service.getBeer(beerId);
    setBeer(beerApi);
  }

  useEffect(() =>{
    getBeer();
  }, [])

  console.log({beer: beer});
  
  return (
    <div>
        {!!beer ? <DetailBox {...beer} /> : <h3>Loading...</h3>}
    </div>
  )
}

