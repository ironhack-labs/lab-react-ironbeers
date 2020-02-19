import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
          <React.Fragment>
            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/AllBeers`}
            >
              <div className="card">
                <img
                  className="card-img-top home"
                  src="images/beers.png"
                  alt="Beers"
                />

                <h3 className="card-title">All Beers</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Link>
            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/RandomBeer`}
            >
              <div className="card">
                <img
                  className="card-img-top home"
                  src="images/random-beer.png"
                  alt="Random Beer"
                />
                <h3 className="card-title">Random Beers</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Link>
            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/NewBeers`}
            >
              <div className="card">
                <img
                  className="card-img-top home"
                  src="images/new-beer.png"
                  alt="New Beer"
                />
                <h3 className="card-title">New Beers</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </Link>
          </React.Fragment>
        );
    }
}

export default Home;