import Header from "../components/Header";
import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import {getRandomBeer} from '../services/calls'

const RandomBeer = () => {
  const [RandomBeer, setRandomBeer] = useState({})

  useEffect(() => {
    getARandomBeer()
  },[])
  

  const getARandomBeer = async() => {
    const randomBeerFromApi = await getRandomBeer()
    setRandomBeer(randomBeerFromApi)
  }


  const {
    image_url,
    name,
    tagline,
    first_brewed,
    attenuation_level,
    description,
    contributed_by,
  } = RandomBeer;
  
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <img src={image_url} width="125" alt={name} />
        <h1>
          {name} <span> {attenuation_level} </span>
        </h1>
        <p>
          {tagline} <span> {first_brewed} </span>
        </p>
        <p> {description} </p>
        <p> {contributed_by} </p>
        <Link to="/"> Back to Home </Link>
      </div>
    </div>
  );
};

export default RandomBeer;
