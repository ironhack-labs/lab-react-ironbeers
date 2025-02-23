import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Search from "../components/Search";

import axios from "axios";
import BeerList from "../components/BeerList";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  // Mock initial state, to be replaced by data from the API. Once you retrieve the list of beers from the Beers API store it in this state variable.
  const [beers, setBeers] = useState([]);

  // TASKS:
  // 1. Set up an effect hook to make a request to the Beers API and get a list with all the beers.

  // 2. Use axios to make a HTTP request.
  // 3. Use the response data from the Beers API to update the state variable.

  const getAllBeers = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => setBeers(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  // The logic and the structure for the page showing the list of beers. You can leave this as it is for now.
  return (
    <>
      <Search beers={beers} setBeers={setBeers} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <BeerList beer={beer} />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllBeersPage;
