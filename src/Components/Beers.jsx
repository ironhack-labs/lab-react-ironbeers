import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function BeerList() {
  const [loading, setLoading] = useState(true);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then(allBeers => {
        console.log("🚀 ~ file: Beers.jsx:13 ~ useEffect ~ allBeers:", allBeers);
        setBeers(allBeers.data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="beers-container">
  <Header />
  <h1>List of Beers</h1>
  <br />
  {loading ? (
    <div className="loading">Loading...</div>
  ) : (
    <div className="beer-list">
      {beers.map((beer) => (
        <div className="beer-item" key={beer._id}>
          <img
            src={beer.image_url}
            alt={beer.name}
            className="beer-image"
          />
          <h2>{beer.name}</h2>
          <p className="beer-tagline">{beer.tagline}</p>
          <p className="beer-contributor">
            Contributed by: {beer.contributed_by}
          </p>
          <Link to={`/beers/${beer._id}`} className="beer-details-link">
            See details
          </Link>
        </div>
      ))}
    </div>
  )}
  <br />
</div>

  );
}

export default BeerList;