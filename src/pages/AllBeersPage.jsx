import React, { useEffect, useState } from 'react';
import BeerService from '../service/BeerService';
import BeerInfo from '../components/BeerInfo';

export default function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const service =  new BeerService();

  const getBeers = async () => {
    const beersApi = await service.getAllBeers();
    console.log({beersApi});
    setBeers(beersApi);
  }

  useEffect(() => {
    getBeers();
  }, [])

  console.log({beers});

  const displayBeers = () => {
    return beers.map((beer) => {
        return <BeerInfo {...beer} key={beer._id}/>
    })
  }

  return (
    <div>
        {!!beers.length ? displayBeers() : <h3>Loading...</h3>}
    </div>
  )
}
