import React from "react";
import beersImage from "./beers.png";
import newbeer from "./new-beer.png";
import randombeer from "./random-beer.png";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="card">
          <Link to="/beers">
            <img className="card-img-top" src={beersImage} alt="Card  1" />
          </Link>

          <div className="card-body">
            <h5 className="card-title">All beers</h5>
            <p className="card-text">
              Some quick example text to show all beers.
            </p>
          </div>
        </div>

        <div className="card">
          <Link to="/randombeer">
            <img className="card-img-top" src={randombeer} alt="Card  2" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Random</h5>
            <p className="card-text">
              Randomize and quickly pick an example beer.
            </p>
          </div>
        </div>

        <div className="card">
          <Link to="/newbeer">
            <img className="card-img-top" src={newbeer} alt="Card  3" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">New beer</h5>
            <p className="card-text">Add a new beer.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
