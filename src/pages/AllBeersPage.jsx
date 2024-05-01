import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  //store Beers API in this state variable.
  const [beers, setBeers] = useState([]);
  const [query, setQuery] = useState("");
  // 1. Set up an effect hook to make a request to the Beers API and get the list
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 2. Use axios to make a HTTP request.
        const response = await axios.get(API_URL);
        console.log("response.data", response.data);
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    // 3. Use the response data from the Beers API to update the state variable.
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSearchedBeers = async () => {
      try {
        const response = await axios.get(API_URL + `/search?q=${query}`);

        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchedBeers();
  }, [query]);

  const searchHandler = (string) => {
    setQuery(string);
  };
  return (
    <>
      <Search searchHandler={searchHandler} />
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
