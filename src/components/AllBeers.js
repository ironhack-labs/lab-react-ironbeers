import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav'

  const AllBeers = () => {
    const [allBeers, setAllBeers] = useState([]);
    const copyAllBeers = [...allBeers];
  
    useEffect(() => {
      const fetchBeers = async () => {
        const allBeersData = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setAllBeers(allBeersData.data);
      };
      fetchBeers();
    }, []);
  
    return (
      <div>
      <Nav/>
        {copyAllBeers.map((beer) => {
          return (
            <Link to ={`./AllBeers.js/${beer._id}`} style={{ textDecoration: 'none' }}>
            <div key={beer._id} className="beersId">
            <img src={beer.image_url} alt='beerImg'></img>
            <h2 className="beersName">{beer.name}</h2>
            <h3 className="beersTagline"> {beer.tagline}</h3>
            <h5 className="beersContributedBy">Created by: {beer.contributed_by}</h5>
            </div>
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default AllBeers;