import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BeersPage() {
  const [beers, setBeers] = useState([]);

  const getBeers = async () => {
    try {
      let response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div>
      {beers.map((beer) => {
        return (
          <div key={beer._id} className="card">
            <img src={beer.image_url} alt="beer" />
            <h3>{beer.name}</h3>
            <h4>{beer.tagline}</h4>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>
              <button className="button select">Check Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default BeersPage;
