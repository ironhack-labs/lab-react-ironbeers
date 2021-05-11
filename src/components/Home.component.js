import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import allBeers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

export default class Home extends Component {
  render() {
    return (
      <div className="columns is-centered mt-3">
        <div className="column is-half">
          <div className="columns">
            <div className="column">
              <img src={allBeers} alt="" />
              <br />
              <div className="content">
                <Link to={`/beers`}>
                  <h1 className="title">All Beers</h1>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum dapibus viverra venenatis. Sed urna nisl, placerat
                  a facilisis id, venenatis et ipsum. Etiam ac semper justo. In
                  hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <img src={randomBeer} alt="" />
              <br />
              <div className="content">
                <Link to={`/random-beer`}>
                  <h1 className="title">Random Beer</h1>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum dapibus viverra venenatis. Sed urna nisl, placerat
                  a facilisis id, venenatis et ipsum. Etiam ac semper justo. In
                  hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <img src={newBeer} alt="" />
              <br />
              <div className="content">
                <Link to={`/new-beer`}>
                  <h1 className="title">New Beers</h1>
                </Link>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum dapibus viverra venenatis. Sed urna nisl, placerat
                  a facilisis id, venenatis et ipsum. Etiam ac semper justo. In
                  hac habitasse platea dictumst.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
