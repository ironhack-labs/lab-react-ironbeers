import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import useFetch from "./components/hooks/useFetch";
import DataBeers from "./DataBeers";

const Beers = function() {
  const { data, loading } = useFetch(
    "https://ih-beers-api2.herokuapp.com/beers"
  );
  if (loading) {
    return <div>Cargando las de cervezas...</div>;
  }

  return (
    <div>
      <Navbar />
      {data.map((beer, i) => (
        <div
          key={i}
          className="card mb-3"
          style={{ maxWidth: "24rem", height: "20rem" }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                style={{ width: "100px", height: "18rem" }}
                src={beer.image_url}
                className="card-img"
                alt="Beer Picture"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <p
                  className="card-text"
                  style={{
                    height: "12rem",
                    overflow: "hidden",
                    texOverflow: "ellipsis"
                  }}
                >
                  {beer.description}
                </p>
                <p className="card-text">
                  <small className="text-muted">{beer.contributed_by}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Beers;
