import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ListBeers() {
  const [beers, setBeers] = useState([]);

  const beersApi = 'https://ih-beers-api2.herokuapp.com/beers';

  const getAllBeers = async () => {
    try {
      let response = await axios.get(beersApi);
      setBeers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <Link to={`/beers/random`}>
        <button className="btn">Random Beer!</button>
      </Link>
      <Link to={`/beers/addbeer`}>
        <button className="btn">Add Beer!</button>
      </Link>
      <h1 className="text-3xl font-sans">List of beers</h1>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <figure className="flex justify-center">
              <img src={beer.image_url} alt="beer" />
            </figure>
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Created by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>
              <button className="btn">Beer details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
