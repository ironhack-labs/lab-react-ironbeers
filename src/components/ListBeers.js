import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeers() {
  const [beers, setBeers] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    async function retrieveBeers() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchPhrase}`
      );
      setBeers(response.data);
    }
    retrieveBeers();
  }, [searchPhrase]);

  function manageTransform(event) {
    setSearchPhrase(event.target.value);
  }

  return (
    <div className="container-fluid" style={{ padding: "20px" }}>
      <div className="row">
        <div className="col-md-4 offset-md-4" style={{ marginBottom: "20px" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Search beers"
            value={searchPhrase}
            onChange={manageTransform}
          />
        </div>
      </div>
      <div className="row">
        {beers.map((beer) => (
          <div className="col-md-12" key={beer._id}>
            <div className="card" style={{ padding: "30px" }}>
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={beer.image_url}
                    className="card-img-top"
                    alt={beer.name}
                    style={{ width: "50px" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <Link
                      to={`/beers/${beer._id}`}
                      className="card-title"
                      style={{ fontSize: "24px", textDecoration: "none" }}
                    >
                      <b>{beer.name}</b>
                    </Link>
                    <p
                      className="card-text"
                      style={{ fontSize: "20px", textDecoration: "none" }}
                    >
                      {beer.tagline}
                    </p>
                    <p className="card-text">
                      <b>Created by: </b>
                      {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListBeers;