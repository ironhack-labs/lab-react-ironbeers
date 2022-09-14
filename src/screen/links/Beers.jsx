import React from "react";
import Header from "../../components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://ih-beers-api2.herokuapp.com/beers";

function Beers() {
  const [beers, setBeers] = useState(null);

  const getAllBeers = () => {
    axios
      .get(`${baseURL}/`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <Header />
      <ul
        className="list-group"
        style={{
          width: 500,
        }}
      >
        {beers
          ? beers.map((beer) => (
              <li key={beer._id} className="list-group-item">
                <div className="d-flex" style={{ height: "150px" }}>
                  <Link to={`/beers/${beer._id}`}>
                    <div>
                      <img
                        src={beer.image_url}
                        style={{
                          width: "35px",
                          height: "120px",
                          margin: "15px",
                        }}
                        alt="beer"
                      />
                    </div>
                  </Link>
                  <div className="m-4">
                    <h3>{beer.name}</h3>
                    <h5 style={{ color: "grey" }}>{beer.tagline}</h5>
                    <div>
                      <span style={{ fontWeight: "bolder" }}>Created BY: </span>
                      {beer.contributed_by}
                    </div>
                  </div>
                </div>
              </li>
            ))
          : "loading"}
      </ul>
    </div>
  );
}

export default Beers;
