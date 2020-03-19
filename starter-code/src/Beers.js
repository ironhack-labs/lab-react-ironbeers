import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import useFetch from "./components/hooks/useFetch";
import Cards from "./components/UI/AllBeers";

const Beers = function() {
  const { data, loading } = useFetch(
    "https://ih-beers-api2.herokuapp.com/beers"
  );
  if (loading) {
    return <Cards>Cargando las de cervezas...</Cards>;
  }

  return (
    <Cards>
      <Navbar />
      {data.map((beer, i) => (
        <>
          <div
            key={i}
            className="card"
            style={{ width: "24rem", height: "11rem" }}
          >
            <Link
              to={`/beer-detail/${beer._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    style={{ width: "40px", height: "7rem" }}
                    src={beer.image_url}
                    className="card-img mt-4 ml-4"
                    alt="Beer Picture"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{beer.name}</h5>
                    <p
                      className="card-text"
                      style={{
                        maxHeight: "12rem",
                        overflow: "hidden",
                        texOverflow: "ellipsis"
                      }}
                    >
                      {beer.tagline}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        {beer.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </>
      ))}
    </Cards>
  );
};

export default Beers;
