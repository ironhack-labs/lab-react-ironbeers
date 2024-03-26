import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

import { useParams } from "react-router-dom";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState(null);
  const [query, setQuery] = useState(null);

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.

  useEffect(() => {
    fetchAllBeers();
  }, []);
  // 2. Use axios to make a HTTP request.

  async function fetchAllBeers() {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSearchedBeers();
    console.log("query", query);
  }, [query]);

  const fetchSearchedBeers = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
      );
      setBeers(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = (result) => {
    setQuery(result);
  };

  // 3. Use the response data from the Beers API to update the state variable.

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search query={query} handleSearch={handleSearch} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div
                    className="card m-2 p-2 text-center"
                    style={{ width: "24rem", height: "18rem" }}
                  >
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">
                        {beer.name}
                      </h5>
                      <h6 className="card-subtitle mb-3 text-muted">
                        <em>{beer.tagline}</em>
                      </h6>
                      <p className="card-text">
                        Created by: {beer.contributed_by}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllBeersPage;
