import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div className="uk-section uk-section-muted">
        <div className="uk-container">
        <h3>Section Muted</h3>
        <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <img data-src="/public/images/beers.png" width="1800" height="1200" alt="" uk-img></img>
                <Link className="uk-text-primary" to="/beers">All Beers</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
      </div>

      <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <img data-src="/images/random-beer.png" width="1800" height="1200" alt="" uk-img></img>
                <Link className="uk-text-primary" to="/random-beer">Random Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
      </div>

      <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <img data-src="/public/images/new-beer.png" width="1800" height="1200" alt="" uk-img></img>
                <Link className="uk-text-primary" to="/new-beer">New Beer</Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
      </div>
    </div>
  </div>
    )
  }
}

export default HomePage;