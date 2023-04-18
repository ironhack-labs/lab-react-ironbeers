import React from "react";
import { Link } from "react-router-dom";

const homepage = () => {
  return (
    <div>
      <h1>Pick here ⬇️</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="card"
              style={{ maxWidth: "350px", minHeight: "500px" }}
            >
              <img
                className="card-img-top"
                src="https://static.yoursurprise.com/galleryimage/37/3731301ea592d4b8c80aaadaf1c1d914.jpg"
                alt="All beers"
              />
              <div className="card-body">
                <h5 className="card-title">All Beers</h5>
                <p className="card-text">
                  "Hop in and explore our beertropolis, where the streets are
                  paved with brews!
                </p>
                <Link className="btn btn-primary" to={`/beers`}>
                  {" "}
                  Beer Bonanza{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ maxWidth: "350px", minHeight: "500px" }}
            >
              <img
                className="card-img-top"
                src="https://static.yoursurprise.com/galleryimage/37/3731301ea592d4b8c80aaadaf1c1d914.jpg"
                alt="All beers"
              />
              <div className="card-body">
                <h5 className="card-title">Random Beer</h5>
                <p className="card-text">
                  Roll the malt dice and embark on a spontaneous, foamy
                  escapade!
                </p>
                <Link className="btn btn-primary" to={`/random-beer`}>
                  {" "}
                  Beer Surprise{" "}
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ maxWidth: "350px", minHeight: "500px" }}
            >
              <img
                className="card-img-top"
                src="https://static.yoursurprise.com/galleryimage/37/3731301ea592d4b8c80aaadaf1c1d914.jpg"
                alt="All beers"
              />
              <div className="card-body">
                <h5 className="card-title">Brew Genius</h5>
                <p className="card-text">
                  Channel your inner Hops-goblin and concoct a bewitching brew!
                </p>
                <Link className="btn btn-primary" to={`/new-beer`}>
                  {" "}
                  Brew Genius{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepage;
