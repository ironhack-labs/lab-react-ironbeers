import React from "react";
import allBeersImg from "./../assets/beers.png";
import randomBeerImg from "./../assets/random-beer.png";
import newBeerImg from "./../assets/new-beer.png";

export const Homepage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="card mb-3" style={{ width: "40%", marginTop: "20px" }}>
        <img src={allBeersImg} className="card-img-top" alt="all beers" />
        <div className="card-body">
          <h2 className="card-title">All Beers</h2>
          <p className="card-text">
            Click here to check all the awesome beers we have for you!
          </p>
        </div>
      </div>

      <div className="card mb-3" style={{ width: "40%", marginTop: "20px" }}>
        <img src={randomBeerImg} className="card-img-top" alt="random beer" />
        <div className="card-body">
          <h2 className="card-title">Random Beer</h2>
          <p className="card-text">
            Click here to check an awesome random beer!
          </p>
        </div>
      </div>

      <div className="card mb-3" style={{ width: "40%", marginTop: "20px" }}>
        <img src={newBeerImg} className="card-img-top" alt="new beer" />
        <div className="card-body">
          <h2 className="card-title">New Beer</h2>
          <p className="card-text">
            Click here to create a super awesome beer!
          </p>
        </div>
      </div>
    </div>
  );
};
