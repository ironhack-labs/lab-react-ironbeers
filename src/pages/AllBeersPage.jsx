import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const AllBeersPage = () => {
  const [beers, setBeers] = useState([]);
  
  useEffect(() => {
    
    // Fetch data from the API
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => setBeers(data))
      .catch(error => console.error('Error fetching beers:', error));
  }, []);
  return (
    <div className="all-beers-container">
      <h1>All Beers</h1>
      <ul className="beer-list">
        {beers.map(beer => (
          <li key={beer._id} className="beer-item">
            <img src={beer.image_url} alt={beer.name} className="beer-image" />
            <div className="beer-details">
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`} className="details-link">
                See Details
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default AllBeersPage;