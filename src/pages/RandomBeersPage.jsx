import Header from '../components/Header';
import {useState,useEffect} from 'react';
import axios from 'axios';

const RandomBeersPage = ()=>{
const [randomBeer, setRandomBeer] = useState([])
  useEffect(()=>{

    axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
    .then((response) =>{
setRandomBeer(response.data)

    })
  },[]);

  return (
    <>
    <Header/>
  <div>
  <img src={randomBeer.image_url} alt="" />
   <h1>{randomBeer.name}</h1> 
    <h2>{randomBeer.tagline}</h2>
    <p>{randomBeer.first_brewed}</p>
    <p>{randomBeer.attenuation_level}</p>
   <p> {randomBeer.description}</p>
   <h5> {randomBeer.contributed_by}</h5>
  </div>
  </>
  )
  }

  export default RandomBeersPage 