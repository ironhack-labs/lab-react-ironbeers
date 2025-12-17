import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import beersJSON from "./../assets/beers.json";
import axios from "axios";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState(beersJSON);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("https://beers-api.edu.ironhack.com/beers")
      .then(({ data }) => {
        console.log(data);
        setBeers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Search handler function
  const handleSearch = (query) => {
    if (query === "") {
      // If search is empty, fetch all beers
      axios
        .get("https://beers-api.edu.ironhack.com/beers")
        .then(({ data }) => {
          setBeers(data);
        })
        .catch((err) => console.log(err));
    } else {
      // If there's a search query, fetch filtered beers
      axios
        .get(`https://beers-api.edu.ironhack.com/beers/search?q=${query}`)
        .then(({ data }) => {
          setBeers(data);
        })
        .catch((err) => console.log(err));
    }
  };

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.
  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search onSeach={handleSearch}/>

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
                        src="https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
