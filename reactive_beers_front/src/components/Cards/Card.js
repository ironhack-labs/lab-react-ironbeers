import React from "react";
import { Link } from "react-router-dom";

const Card = () => (
  <div>
    <div className="card" style={{ width: "100%" }}>
      <img
        className="card-img-top"
        src="https://solasbarandgrill.com/wp-content/uploads/2014/09/beer-taps.jpg"
        alt="Card"
      />
      <Link to={`/beers`}>
        <div className="card-body">
          <h5 className="card-title">All Beers</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </Link>
    </div>
    <div className="card" style={{ width: "100%" }}>
      <img
        className="card-img-top"
        src="https://solasbarandgrill.com/wp-content/uploads/2014/09/beer-taps.jpg"
        alt="Card"
      />
      <Link to={`/random-beer`}>
        <div className="card-body">
          <h5 className="card-title">Random Beer</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </Link>
    </div>
    <div className="card" style={{ width: "100%" }}>
      <img
        className="card-img-top"
        src="https://solasbarandgrill.com/wp-content/uploads/2014/09/beer-taps.jpg"
        alt="Card"
      />
      <Link to={`/new-beer`}>
        <div className="card-body">
          <h5 className="card-title">New Beer</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default Card;
