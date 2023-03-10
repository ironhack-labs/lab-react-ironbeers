import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

function BeerList() {
  const [loading, setLoading] = useState(true); // Initializes the `loading` state variable with `true`
  const [beers, setBeers] = useState([]); // Initializes the `beers` state variable with an empty array
  const [searchQuery, setSearchQuery] = useState(''); // Initializes the `searchQuery` state variable with an empty string

  useEffect(() => { // useEffect hook that is called when `searchQuery` state variable changes
    const fetchBeers = async () => { // async function that fetches beer data
      try {
        setLoading(true); // sets `loading` to `true` before fetching data
        const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`); // Fetches beer data from API
        setBeers(data); // sets `beers` state variable to the fetched data
        setLoading(false); // sets `loading` to `false` after data is fetched
      } catch (error) { 
        console.error(error);
      }
    };

    fetchBeers(); // calls the `fetchBeers` function to fetch data
  }, [searchQuery]); // useEffect dependency array, triggers the effect only when `searchQuery` changes

  const handleSearchInputChange = (event) => { // event handler for search input change
    setSearchQuery(event.target.value); // sets `searchQuery` state variable to the value of the input
  };

  return (
    <div className="beers-container">
      <Header />
      <h1>List of Beers</h1>
      <br />
      <div>
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" value={searchQuery} onChange={handleSearchInputChange} /> 
      </div>
      <br />
      {loading ? ( // shows "Loading..." message if `loading` is true
        <div className="loading">Loading...</div>
      ) : ( // shows beer list if `loading` is false
        <div className="beer-list">
          {beers.map((beer) => ( // iterates over the `beers` array and displays each beer's information
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
