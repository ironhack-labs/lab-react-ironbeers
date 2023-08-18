import React, { useState, useEffect } from 'react';
import axios from 'axios';
import houseicon from "../assets/houseicon.png";
import { Link } from 'react-router-dom';



function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    // Make a GET request to the API endpoint
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => {
        // Update the state with the fetched beer data
        setBeers(response.data);
      })
      .catch(error => {
        console.error('Error fetching beer data:', error);
      });
  }, []);

  return (
    <div>
        <header>
            <Link to="/"> 
                <img src={houseicon} alt="houseicon" style={{width:"500px"}}/>
            </Link>
        </header>
    
    <div>
      <h2>Beer List</h2>
      <ul>
        {beers.map(beer => (
          <li key={beer._id}>{beer.name}</li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Beers;