import React from 'react'
import beer from "../assets/beers.png"
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'; 


function AllBeers() {
  const [beers, setBeers] = useState([]);
  const [fetching, setFetching] = useState(true);

  const getBeers= async () => {
    try {
      const call = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    
      setBeers(call.data);
      setFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  if (fetching) {
    return <h1>Loading...</h1>;
  } else {
    return (
        <div>
        <Link to="/"> <img src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png" alt="" /> </Link>

<img src={beer} alt="" />
<div>
        {beers.map((beers) => {
          return (
            <div>
                <img src={beers.image_url} alt="" />
  <p>{beers.tagline}</p>
  <p>{beers.contributed_by}</p>
  <Link to={`/AllBeers/${beers._id}`}><p> {beers.name} </p></Link>
          </div>
          );
        })}
        </div>
        </div>
    );
  }
}

export default AllBeers;


