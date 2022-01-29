import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BeerCard from './BeerCard';
// import classes from './BeerDetails.module.css';

const baseUrl = 'https://ih-beers-api2.herokuapp.com';
const api = axios.create({ baseURL: baseUrl });

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();
  console.log(beerId);
  useEffect(() => {
    const fetchBeer = async () => {
      const { data } = await api.get(`/beers/random`);
      setBeer(data);
    };
    fetchBeer();
  }, [beerId]);
  console.log(beer);
  return <BeerCard beer={beer} />;
};

export default RandomBeer;
