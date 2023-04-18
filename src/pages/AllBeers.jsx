import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      setBeers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <div className="container my-3">
          <div className="row">
            {beers.map((beer) => (
              <div key={beer._id} className="col m-1">
                <div className="card" style={{ width: "250px" }}>
                  <h4>{beer.name}</h4>
                  <img
                    className="card-img-top"
                    src={beer.image_url}
                    alt={beer.name}
                    style={{
                      height: "250px",
                      maxWidth: "50%",
                      margin: "auto",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{beer.tagline}</h5>
                    <p className="card-text">Created by: {beer.contributed_by}</p>
                    <Link className="btn btn-primary" to={`/beers/${beer._id}`}>
                      Check beer Details
                    </Link>
                  </div>
                  <br />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBeers;
