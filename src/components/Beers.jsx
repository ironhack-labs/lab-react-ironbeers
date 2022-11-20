import React, {useState, useEffect} from 'react'
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers() {
    const [beers, setBeers] = useState([])

  const getFromApi = async () => {
    try {
      const apiCall = await axios.get(`https://ih-beers-api2.herokuapp.com/beers`);
      setBeers(apiCall.data); 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

   getFromApi()

  }, [])
  return (
    <div>
        <Header/>

        {beers.map((beer) => {
        return (
          <div>
            <img src={beer.image_url} alt=""x/>
            <Link to={`/beers/${beer._id}`}><p>{beer.name}</p></Link>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Beers