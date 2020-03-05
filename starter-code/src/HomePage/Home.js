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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
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
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </Link>
      </div>
    );
  }
}

export default Home;
