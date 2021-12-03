import React from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const apiURL = 'https://ih-beers-api2.herokuapp.com';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiURL}/beers`);
      const beersData = response.data;

      console.log('beersData', beersData);
      setBeers(beersData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>All Beers</h1>
      <div>
        {beers.map((eachBeer) => {
          return (
            <Link key={eachBeer._id} to={'/beers/' + eachBeer._id}>
              <div className="card">
                <div className="card-image">
                  <img
                    src={eachBeer.image_url}
                    alt="Beer"
                    style={{ width: '20%' }}
                  />
                </div>
                <div className="card-txt">
                  <h1>{eachBeer.name} </h1>
                  <h2> {eachBeer.tagline} </h2>
                  <p>Contributed by: {eachBeer.contributed_by} </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default AllBeersPage;
