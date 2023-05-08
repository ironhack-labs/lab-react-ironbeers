import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

function BeersList() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      const url = searchTerm
        ? 'https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}'
        : 'https://ih-beers-api2.herokuapp.com/beers';
      const response = await fetch(url);
      const data = await response.json();
      setBeers(data);
    };
    fetchBeers();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Header />
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search beers..." />
      {beers.map(beer => (
        <div className="cajasList" key={beer._id}>
          <div className="imgCaja">
            <img className="imgCerveza" src={beer.image_url} alt={beer.name} />
          </div>
          <div className="textoCaja">
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>View details</Link>
            </div>
        </div>
      ))}
    </div>
  );
}

export default BeersList;