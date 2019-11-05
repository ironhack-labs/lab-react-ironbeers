import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Ironbeers</h1>
        </header>
        <br />
        <div className="container-fluid">
          <div className="card mb-3">
            <img className="card-img-top" src="/images/beers.png" alt="" />
            <div className="card-body">
              <Link to="/beers">
                {" "}
                <h5 className="card-title">List of Beers</h5>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="card mb-3">
            <img
              className="card-img-top"
              src="/images/random-beer.png
            "
              alt=""
            />
            <div className="card-body">
              <Link to={`/beers/random`}>
                {" "}
                <h5 className="card-title">Random beers</h5>{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="card mb-3">
            <img className="card-img-top" src="/images/new-beer.png" alt="" />
            <div className="card-body">
              <Link to="/new-beer">
                {" "}
                <h5 className="card-title">Create a new beer</h5>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
