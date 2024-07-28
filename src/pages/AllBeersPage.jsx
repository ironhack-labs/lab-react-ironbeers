import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then(response => response.json())
      .then(data => {
        setAllBeers(data);
        setBeers(data);
      })
      .catch(error => console.error('Error fetching beers:', error));
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setBeers(allBeers);
    } else {
      const filteredBeers = allBeers.filter(beer =>
        beer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        beer.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setBeers(filteredBeers);
    }
  }, [searchQuery, allBeers]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="all-beers-page">
      <h1>All Beers</h1>
      <input
        type="text"
        placeholder="Search for a beer..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul className="beers-list">
        {beers.map(beer => (
          <li key={beer._id} className="beer-item">
            <Link to={`/beer/${beer._id}`}>
              <img src={beer.image_url} alt={beer.name} className="beer-image" />
              <div className="beer-info">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p><strong>Contributed by:</strong> {beer.contributed_by}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllBeersPage;
