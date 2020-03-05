import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    
    return (
      <div className="container">
        <Link to="/beers">
          <div>
            <div>
              <img
                style={{ width: "100vw" }}
                src="../images/beers.png"
                alt=""
              />
            </div>
            <h2>All Beers</h2>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </Link>

        <Link to="/random-beer">
          <div>
            <div>
              <img
                style={{ width: "100vw" }}
                src="../images/random-beer.png"
                alt=""
              />
            </div>
            <h2>Random Beer</h2>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </Link>

        <Link to="/new-beer">
          <div>
            <div>
              <img
                style={{ width: "100vw" }}
                src="../images/new-beer.png"
                alt=""
              />
            </div>
            <h2>New Beer</h2>
            <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
