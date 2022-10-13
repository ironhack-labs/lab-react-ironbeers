import React from "react";
import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";

const HomePage = () => {
  return (
    <div className="d-flex flex-column">
      <Link
        to="/beers"
        style={{ textDecoration: "none" }}
        className="container-lg"
      >
        <div className="card w-100 my-2">
          <img src={beersImg} className="card-img-top" alt="beers" />
          <div className="card-body text-start">
            <h5 className="card-title text-black">All Beers</h5>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque erat sem, faucibus vitae sem nec, volutpat ultricies
              eros. Duis finibus finibus elementum.
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/random-beer"
        style={{ textDecoration: "none" }}
        className="container-lg"
      >
        <div className="card w-100 my-2">
          <img src={randomBeerImg} className="card-img-top" alt="beers" />
          <div className="card-body text-start">
            <h5 className="card-title text-black">Random Beer</h5>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque erat sem, faucibus vitae sem nec, volutpat ultricies
              eros. Duis finibus finibus elementum.
            </p>
          </div>
        </div>
      </Link>
      <Link
        to="/new-beer"
        style={{ textDecoration: "none" }}
        className="container-lg"
      >
        <div className="card w-100 my-2">
          <img src={newBeerImg} className="card-img-top" alt="beers" />
          <div className="card-body text-start">
            <h5 className="card-title text-black">New Beer</h5>
            <p className="card-text text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque erat sem, faucibus vitae sem nec, volutpat ultricies
              eros. Duis finibus finibus elementum.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
