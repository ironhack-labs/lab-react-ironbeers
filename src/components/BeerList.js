import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';



function BeerList() {
  const [state, setState] = useState([
    {
      image_url: '',
      name: '',
      tagline: '',
      contributed_by: '',
      _id: '',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers'
        );
        setState([...response.data]);
      } catch (err) {}
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <h1 className="new-beer">All Them Beers</h1>
      <ul>
        {state.map((beer) => (
          <Link
            key={beer._id}
            to={`/beers/${beer._id}`}
            className="container-1"
          >
            <li>
              <img src={beer.image_url} alt={beer.name} />
              <p>{beer.name}</p>
              <p>{beer.tagline}</p>
              <p>
                <strong>CREATED BY </strong>
                {beer.contributed_by}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default BeerList;