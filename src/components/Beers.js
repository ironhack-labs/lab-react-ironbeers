import {Fragment, React, useState} from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const Beers = () => {
    
    const [beers, setBeers] = useState([]); //at first is empty array

    const endpoint = 'https://ih-beers-api2.herokuapp.com/beers';
    useEffect(()=>{
      async function fetchData() {
        const response = await axios.get(endpoint);
        setBeers(response.data);
        console.log(response.data)
      }
      fetchData();

    },[]);

    const beerCard = beers.map(item => {
      return (
        <div key={item._id}>
          <Link to={`/beers/${item._id}`}>
            <img src={item.image_url} alt="country"/>
            <h2>{item.name}</h2>
            <p>{item.tagline}</p>
            <p>Contributed by {item.contributed_by}</p>
          </Link>
          </div>
      )
    })


  return (
    <Fragment>
      <div className="beer-details-wrapper">
        {beerCard}
      </div>
    </Fragment>
  )
}

export default Beers;