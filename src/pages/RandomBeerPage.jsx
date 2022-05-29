import React,  { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function RandomBeerPage() {
  const [beer, setBeer] = useState([]);

  const getBeer = async () => {
    try {
      let response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeer();
  }, []);



  return (
    <div>
      <NavBar />
        <img src={beer.image_url} />
        <h3>{beer.name}</h3>
        <p>{beer.tagline}</p>
        <p>{beer.contributed_by}</p>
        <Link to="/beers">
        <button>Back to beers</button>
      </Link>
    </div>
  )
}

export default RandomBeerPage