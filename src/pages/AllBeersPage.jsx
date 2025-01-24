import { useState, useEffect } from "react";
import axios from "axios";
import BeerCard from "../components/beerCard";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => {
        setBeers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("fetching error", error);
        setError(true);
      });
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  if (error)
    return (
      <div className="text-center mt-5">
        <p className="">There is no item to display ...</p>
      </div>
    );

  if (loading)
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status"></div>
        <p className="">Loading...</p>
      </div>
    );

  return (
    <div className="container-md mt-3">
      <div className="container-fluid d-flex justify-content-center">
        <div className="input-group mb-4" style={{ maxWidth: "20rem" }}>
          <label
            className="input-group-text text-white bg-dark border-bottom border-body"
            data-bs-theme="dark"
            htmlFor="searchBar"
          >
            Search
          </label>
          <input
            id="searchBar"
            type="text"
            className="form-control"
            placeholder="Search Beers by their Names"
            value={query}
            onChange={handleChange}
          />
        </div>
      </div>

      {beers.map((beer) => (
        <BeerCard key={beer._id} beer={beer} />
      ))}
    </div>
  );
}

export default AllBeersPage;
