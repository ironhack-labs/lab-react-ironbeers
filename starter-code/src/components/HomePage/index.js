import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="uk-section uk-section-muted">
        <div className="uk-container">
        <h3>Section Muted</h3>
        <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <img data-src="/public/images/beers.png" width="1800" height="1200" alt="" uk-img></img>
                <h3>All Beers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
      </div>

      <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <img data-src="/images/random-beer.png" width="1800" height="1200" alt="" uk-img></img>
                <h3>Random Beer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
      </div>

      <div className="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <img data-src="/public/images/new-beer.png" width="1800" height="1200" alt="" uk-img></img>
                <h3>New Beer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
      </div>
    </div>
  </div>
    )
  }
}

export default HomePage;