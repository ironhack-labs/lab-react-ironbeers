import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <Link to="/beers">
            <img src="./images/beers1.jpg" className="card-img-top" alt="bar" />
          </Link>
          <div className="card-body">
            <h3 className="card-title">All Beers</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              bibendum neque. Pellentesque et gravida mauris. Donec pretium
              porttitor nunc, ut luctus tortor dignissim quis. Donec justo
              dolor, lacinia vitae neque vel, viverra finibus dolor.
            </p>
          </div>
        </div>

        <div className="card">
          <Link to="/random-beer">
            <img
              src="./images/beers2.jpeg"
              className="card-img-top"
              alt="taps"
            />
          </Link>
          <div className="card-body">
            <h3 className="card-title">Random Beer</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              bibendum neque. Pellentesque et gravida mauris. Donec pretium
              porttitor nunc, ut luctus tortor dignissim quis. Donec justo
              dolor, lacinia vitae neque vel, viverra finibus dolor.
            </p>
          </div>
        </div>

        <div className="card">
          <Link to="/new-beer">
            <img
              src="./images/beers3.jpeg"
              className="card-img-top"
              alt="beers"
            />
          </Link>
          <div className="card-body">
            <h3 className="card-title">New Beer</h3>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              bibendum neque. Pellentesque et gravida mauris. Donec pretium
              porttitor nunc, ut luctus tortor dignissim quis. Donec justo
              dolor, lacinia vitae neque vel, viverra finibus dolor.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
