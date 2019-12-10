import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./HomeView.scss";

class HomeView extends Component {
  render() {
    return (
      <div className="totalBox">
        <p>You're at the home view!</p>
        <div className="homeBoxes">
          <img src="./../../images/beers.png" alt="here should be the beers" />
          <h2>All beers</h2>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            consectetur natus quam error incidunt maiores? Dolor ipsum vero,
            dolore fuga omnis perspiciatis a accusantium explicabo quaerat
            quidem rem nulla ex?
          </article>
          <Link to="/beers">Link to Beer-List</Link>
        </div>
        <div className="homeBoxes">
          <img
            src="./../../images/random-beer.png"
            alt="here should be the random beers"
          />
          <h2>Random beer</h2>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            consectetur natus quam error incidunt maiores? Dolor ipsum vero,
            dolore fuga omnis perspiciatis a accusantium explicabo quaerat
            quidem rem nulla ex?
          </article>
          <Link to="/random-beer">Link to Random Beer</Link>
        </div>
        <div className="homeBoxes">
          <img
            src="./../../images/new-beer.png"
            alt="here should be the new beer"
          />
          <h2>New beer</h2>
          <article>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            consectetur natus quam error incidunt maiores? Dolor ipsum vero,
            dolore fuga omnis perspiciatis a accusantium explicabo quaerat
            quidem rem nulla ex?
          </article>
          <Link to="/NewBeerView">Link to New Beer</Link>
        </div>
      </div>
    );
  }
}

export default HomeView;
