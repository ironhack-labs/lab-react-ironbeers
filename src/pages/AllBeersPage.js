import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Searchbar from '../components/Searchbar';

const apiURL = 'https://ih-beers-api2.herokuapp.com/beers';

console.log(apiURL);

function AllBeersPage() {
  //set a state for the objects in the API
  const [beers, setBeers] = useState([]);
  console.log('Initial state');

  //use effect to run the mounting and using axios to get the data
  useEffect(() => {
    const fetchData = async () => {
      console.log('effect');
      const response = await axios.get(`${apiURL}/`);
      const beersData = response.data;

      console.log('beersData', beersData);
      setBeers(beersData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Searchbar />
      
      <h2>All Beers</h2>
      {beers &&
        beers.map((oneBeer) => {
          console.log('onebeer', oneBeer);
          return (
            <Link to={"/beers/details/" + oneBeer._id} key={oneBeer._id}>
              <div className="container">
                <div>
                  <img src={oneBeer.image_url} alt="" height="200px" />
                </div>
                <div>
                  <p>{oneBeer.name}</p>
                  <p>{oneBeer.tagline}</p>
                  <p>{oneBeer.contributed_by}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}

export default AllBeersPage;
