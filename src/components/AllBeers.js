import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        console.log(response);
        setBeers([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        {beers.map((beer) => (
          <div key={beer._id} className="allBeersContainer">
            <div>
              <img src={beer.image_url} className="beerImgs" />
            </div>
            <div>
              <Link to={`/beers/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
              <p>{beer.tagline}</p>
              <small>
                <p>
                  <strong>Created by: </strong> {beer.contributed_by}
                </p>
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBeers;
