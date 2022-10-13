import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BeersPage = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => setBeers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
      .then((response) => setBeers(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-100">
      <div className="row w-100 d-flex flex-column align-items-center justify-content-center my-4">
        <div className="col-12 col-md-6">
          <label htmlFor="search" className="w-100 ms-2 text-start">
            Search
          </label>
          <input
            type="text"
            value={search}
            className="form-control"
            onChange={handleInput}
            id="search"
            placeholder="Search a drink"
          />
        </div>
      </div>
      <div className="d-flex flex-wrap container-sm justify-content-center">
        {beers?.map((beer) => {
          return (
            <Link
              to={`/beers/${beer._id}`}
              style={{ textDecoration: "none" }}
              key={beer._id}
              className="col-12 col-lg-5 m-1"
            >
              <div
                className="card w-100 my-2 d-flex flex-row align-items-center"
                style={{
                  height: "250px",
                }}
              >
                <div className="row g-0 d-flex flex-row align-items-center w-100">
                  <div className="col-4 d-flex flex-row align-items-center justify-content-center">
                    <img
                      src={beer.image_url}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ height: "100px" }}
                    />
                  </div>
                  <div className="col-8">
                    <div
                      className="card-body text-start "
                      style={{ width: "200px" }}
                    >
                      <h5 className="card-title text-black">{beer.name}</h5>
                      <p className="card-text text-secondary mb-0">
                        {beer.tagline}
                      </p>
                      <p className="card-text">
                        <small className="text-black">
                          <span className="fw-bold">Created by: </span>
                          {beer.contributed_by}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BeersPage;
