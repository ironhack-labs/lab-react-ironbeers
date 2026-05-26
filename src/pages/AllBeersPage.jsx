import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";

const API_URL = "https://beers-api.edu.ironhack.com";

function AllBeersPage() {
  // TASK 0: Initial state for beers
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // TASK 1: Set up an effect hook to make a request to the Beers API
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        let response;

        if (searchQuery === "") {
          response = await axios.get(`${API_URL}/beers`);
        } else {
          response = await axios.get(`${API_URL}/beers/search?q=${searchQuery}`);
        }
        setBeers(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchBeers();

  }, [searchQuery]);


  return (
    <>
      {/* Pass searchQuery and handleSearch as props to Search */}
      {/* Search renders the input, but AllBeersPage owns the state */}
      <Search searchQuery={searchQuery} handleSearch={handleSearch} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers &&
          beers.map((beer, i) => {
            return (
              <div key={i}>
                <Link to={"/beers/" + beer._id}>
                  <div className="card m-2 p-2 text-center" style={{ width: "24rem", height: "18rem" }}>
                    <div className="card-body">
                      <img
                        src={beer.image_url}
                        style={{ height: "6rem" }}
                        alt={"image of" + beer.name}
                      />
                      <h5 className="card-title text-truncate mt-2">{beer.name}</h5>
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

