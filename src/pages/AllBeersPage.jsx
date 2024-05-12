import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios";

const API = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState(beersJSON);

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  useEffect(() => {
    // 2. Use axios to make a HTTP request.
    axios
      .get(API)
      .then((response) => {
        // 3. Use the response data from the Beers API to update the state variable.
        setBeers(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Iteration 5: Implement the search functionality. The search bar should filter the beers by name. You can leave this as it is for now.
  const search = (query) => {
    axios
      .get(API + "/search?q=" + query)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  };

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search onSearchSubmit={search} />

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
