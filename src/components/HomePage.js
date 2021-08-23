import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <>
        <section className="home-sec">
          <img src="../assets/beers.png" />
          <Link to="/beers">
            <h1>All Beers</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis urna cursus eget nunc.
            </p>
          </Link>
        </section>
        <section className="home-sec">
          <img src="../assets/random-beer.png" />
          <Link to="/random-beer">
            <h1>Random Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis urna cursus eget nunc.
            </p>
          </Link>
        </section>
        <section className="home-sec">
          <img src="../assets/new-beer.png" />
          <Link to="/new-beer">
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Venenatis urna cursus eget nunc.
            </p>
          </Link>
        </section>
      </>
    );
  }
}
