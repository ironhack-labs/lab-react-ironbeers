import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BeerDetailsPage from "../pages/BeerDetailsPage";

function Search() {
  const [query, setQuery] = useState("");
  const [beers, setBeers] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim() === "") {
      setBeers([]);
      return;
    }

    setLoading(true);

    const delay = setTimeout(() => {
      axios
        .get(`https://beers-api.edu.ironhack.com/beers/search?q=${query}`)
        .then((response) => {
          setBeers(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }, 100);

    return () => clearTimeout(delay);
  }, [query]);

  const handleSelect = (beer) => {
    setQuery(beer.name);
    setBeers([]);
    navigate(`/beers/${beer._id}`);
  };

  return (
    <div className="d-flex flex-column align-items-center w-100 p-4">
      <div className="input-group mb-3 w-50">
        <span className="input-group-text">Search</span>

        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search beers..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading && <p>Loading...</p>}

      <ul className="list-group w-50">
        {beers.map((beer) => (
          <li
            key={beer._id}
            className="list-group-item list-group-item-action"
            style={{ cursor: "pointer" }}
            onClick={() => handleSelect(beer)}
          >
            <strong>{beer.name}</strong>
            <br />
            <small>{beer.tagline}</small>
          </li>
        ))}
      </ul>

      {!loading && query && beers.length === 0 && <p>No results found</p>}
    </div>
  );
}

export default Search;
