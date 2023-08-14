import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import baseURL from "../utils/constants.js";

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  
  useEffect(() => {
    if (searchQuery) {
      axios
        .get(`${baseURL}/beers/search?q=${searchQuery}`)
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the beers:", error);
        });
    } else {
      axios
        .get(`${baseURL}/beers`)
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching the beers:", error);
        });
    }
  }, [searchQuery]);
  
  return (
    <div>
      <header className=".home-link">
        <Link to="/" className="home-link">
          Home
        </Link>
      </header>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for beers..."
      />
      {beers.map((beer) => {
        return (
          <div className="beer-card" key={beer._id}>
            <img src={beer.image_url} alt={beer.name} className="beer-image" />
            <div>
              <h2>{beer.name}</h2>
              <p className="beer-tagline">{beer.tagline}</p>
              <p className="beer-contributor">
                Contributed by: {beer.contributed_by}
              </p>
              <Link to={`/beers/${beer._id}`}>See Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Beers;
