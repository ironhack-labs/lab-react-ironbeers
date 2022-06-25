import { useEffect, useState } from 'react';
import axios from 'axios';

import BeerCard from '../components/BeerCard'


const AllBeers = () => {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(({ data }) => {
        setBeers(data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));

  }, [])

  if (isLoading) {
    return <p>Loading...</p>;
  }


  return (
    <>
      {beers.map(
        ({ _id, image_url, name, tagline, contributed_by }) => {
          return <BeerCard {...{ _id, image_url, name, tagline, contributed_by }} />
        })}
    </>
  )
}

export default AllBeers