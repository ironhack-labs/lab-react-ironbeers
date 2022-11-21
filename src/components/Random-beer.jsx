import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import NavBar from '../../src/assets/navbar.png'
import axios from 'axios'

function RandomBeer() {

  const [beers, setBeers] = useState([])


    const getFromApi = async () => {
        try {
          const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
          setBeers(response.data);
        } catch (error) {
          console.log(error);
        }
      };
    
useEffect(() => {
  getFromApi();
}, [])


  return (
    <div>
       <Link to={'/'}> <img src={NavBar} alt="" /> </Link>
       <p>{beers.name}</p>

    </div>
  )
}

export default RandomBeer