import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navBar';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Beers</h1>
      {beers.map((beer) => (
        <div key={beer._id}>
          <img src={beer.image_url} alt={beer.name} style={{ height: '100px' }} />
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default Beers;