import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <ul>
          <li>
            <Link to="/beers">
              {" "}
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/beers.png" alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">All Beers</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/random-beer">
              {" "}
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/new-beer.png" alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Random Beer</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/new-beer">
              {" "}
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src="/images/random-beer.png" alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Add Beer</p>
                    </div>
                  </div>
                  <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
