import React from "react";
import allBeersImg from "./../assets/beers.png";
import randomBeerImg from "./../assets/random-beer.png";
import newBeerImg from "./../assets/new-beer.png";
import { Link } from "react-router-dom";

export const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="card mb-3"
        style={{
          width: "40%",
          marginTop: "20px",
          boxShadow: "10px 10px 25px grey",
          borderRadius: "30px",
        }}
      >
        <Link to="/beers">
          <img
            src={allBeersImg}
            className="card-img-top"
            alt="all beers"
            style={{ borderRadius: "30px" }}
          />
        </Link>
        <div className="card-body text-start">
          <h2 className="card-title" style={{ color: "#4db8ff" }}>
            All Beers
          </h2>
          <p className="card-text">
            Click here to check all the awesome beers we have for you!
          </p>
        </div>
      </div>

      <div
        className="card mb-3"
        style={{
          width: "40%",
          marginTop: "20px",
          boxShadow: "10px 10px 25px grey",
          borderRadius: "30px",
        }}
      >
        <Link to="/random-beer">
          <img
            src={randomBeerImg}
            className="card-img-top"
            alt="random beer"
            style={{ borderRadius: "30px" }}
          />
        </Link>
        <div className="card-body text-start">
          <h2 className="card-title" style={{ color: "#4db8ff" }}>
            Random Beer
          </h2>
          <p className="card-text">
            Click here to check an awesome random beer!
          </p>
        </div>
      </div>

      <div
        className="card mb-3"
        style={{
          width: "40%",
          marginTop: "20px",
          boxShadow: "10px 10px 25px grey",
          borderRadius: "30px",
        }}
      >
        <img
          src={newBeerImg}
          className="card-img-top"
          alt="new beer"
          style={{ borderRadius: "30px" }}
        />
        <div className="card-body text-start">
          <h2 className="card-title" style={{ color: "#4db8ff" }}>
            New Beer
          </h2>
          <p className="card-text">
            Click here to create a super awesome beer!
          </p>
        </div>
      </div>
    </div>
  );
};
