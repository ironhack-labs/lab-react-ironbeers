import {Fragment, React, useState} from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Beers = () => {
    
    const [beers, setBeers] = useState([]); //at first is empty array

    const [loading, setLoading] = useState(true);

    const endpoint = 'https://ih-beers-api2.herokuapp.com/beers';
    useEffect(()=>{
      async function fetchData() {
        const response = await axios.get(endpoint);
        setBeers(response.data);
        console.log(response.data)
      }
      fetchData();
      setLoading(false);

    },[]);

    const beerCard = beers.map(item => {
      return (
        <div  key={item._id}>
          <Link className="beer-each-wrapper" to={`/beers/${item._id}`}>
            <img src={item.image_url} alt="country"/>
            <div>
              <h2>{item.name}</h2>
              <p>{item.tagline}</p>
              <p>Contributed by {item.contributed_by}</p>
            </div>
          </Link>
          </div>
      )
    })


  return (
    <Fragment>
    {loading && <p>Looking for your beers...</p> }
      <div className="beer-details-wrapper">
        {beerCard}
      </div>
    </Fragment>
  )
}

export default Beers;