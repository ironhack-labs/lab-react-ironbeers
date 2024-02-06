import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Search from "../components/Search";
import axios from "axios";

const API_URL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const getBeers = (query = "") => {
    setIsLoading(true);
    axios
      .get(`${API_URL}/search?q=${query}`)
      .then((resp) => {
        setBeers(resp.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getBeers(searchQuery);
  }, [searchQuery]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <Search onSearchChange={handleSearchChange} />

      <div className="d-inline-flex flex-wrap justify-content-center align-items-center w-100 p-4">
        {beers.map((beer, i) => {
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
                      alt={"image of " + beer.name}
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
