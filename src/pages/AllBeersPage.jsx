import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
// for the sake of the lab i'm going to use AXIOS
import axios from "axios";
import Search from "../components/Search";
import { API_URL } from "../components/Constants";

// import beersJSON from "./../assets/beers.json";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Define an asynchronous function to fetch beers
  const fetchBeers = async (search = "") => {
    try {
      // Use Axios to make a GET request to the API
      const response = await axios.get(`${API_URL}/search?q=${search}`);
      setBeers(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that is not in the range of 2xx
        console.error(
          "Server responded with status code: ",
          error.response.status
        );
        console.error("Response data: ", error.response.data);
        // Here you can handle the error based on the status code
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received: ", error.request);
      } else {
        // Something else happened in setting up the request
        console.error("Error setting up the request: ", error.message);
      }
    }
  };

  useEffect(() => {
    fetchBeers();
  }, []);

  // Debounce function to limit the rate at which the fetchBeers function is called
  // this is new but it makes sense to limit the quesry at 0.5 seconds
  const debounce = (func, delay) => {
    let inDebounce;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => func.apply(context, args), delay);
    };
  };

  // Event handler for search input that updates the searchTerm and triggers debounced search
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    debouncedSearch(event.target.value);
  };

  // Create a debounced version of the fetchBeers function
  const debouncedSearch = useCallback(
    debounce((search) => {
      fetchBeers(search);
    }, 500),
    []
  ); // 500 ms delay

  return (
    <>
      <Search value={searchTerm} onChange={handleSearch} />

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
