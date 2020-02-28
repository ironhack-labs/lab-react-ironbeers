import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/beers">
          <div className="card border-0">
            <img
              src="../images/beers.png"
              alt="beer"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-left">All Beers</h5>
              <p className="card-text text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed scelerisque sem.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/random-beer">
          <div className="card border-0">
            <img
              src="../images/random-beer.png"
              alt="random-beer"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-left">Random Beer</h5>
              <p className="card-text text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed scelerisque sem.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/new-beer">
          <div className="card border-0">
            <img
              src="../images/new-beer.png"
              alt="new-beer"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title text-left">New Beer</h5>
              <p className="card-text text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas sed scelerisque sem.
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
