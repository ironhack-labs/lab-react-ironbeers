import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    axios
   .get("https://ih-beers-api2.herokuapp.com/beers")
   .then((response) => {
        setBeers(response.data);
      })
   .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      axios
     .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`)
     .then((response) => {
          if (response.data.length === 0) {
            setNoResults(true);
          } else {
            setSearchResults(response.data);
          }
        })
     .catch((error) => console.log(error));
    } else {
      setSearchResults([]);
      setNoResults(false);
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleResetSearch = () => {
    setSearchQuery('');
    setNoResults(false);
  };

  return (
    <div>
      <input type="text" value={searchQuery} onChange={handleSearch} placeholder="Search for a beer" />
      {searchResults.length > 3 &&
        searchResults.map((beer) => (
          <article key={beer.id}>
            <Link to={`/beers/${beer._id}`}>
              <h2>{beer.name}</h2>
            </Link>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </article>
        ))}
      {noResults &&
        <div>
          <p>No such beer was found.</p>
          <button onClick={handleResetSearch}>Reset search</button>
        </div>
      }
      {searchQuery === '' &&
        beers.map((beer) => (
          <article key={beer.id}>
            <Link to={`/beers/${beer._id}`}>
              <h2>{beer.name}</h2>
            </Link>
            <img src={beer.image_url} alt={beer.name} />
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </article>
        ))}
    </div>
  );
}

export default AllBeersPage;