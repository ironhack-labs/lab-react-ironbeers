import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <img className="homepage-img" src="/beers.png" alt="bar with beers" />
          <h1>
            <Link to={'/beers'}>All Beers</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div>
          <img className="homepage-img" src="/random-beer.png" alt="close-up of beer tap" />
          <h1>
            <Link to={'/random-beer'}>Random Beer</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. 
          </p>
        </div>
        <div>
          <img className="homepage-img" src="/new-beer.png" alt="close-up of beer glass" />
          <h1>
            <Link to={'/new-beer'}>New Beer</Link>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. 
          </p>
        </div>
      </div>
    );
  }
}
