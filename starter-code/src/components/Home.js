import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
            <div className="card" style={{width: "50%", margin: '0 auto'}}>
            <img className="card-img-top" src="/images/beers.png" alt="Card image cap"/>
            <div className="card-body">
            <Link to="/beers"><h1>All Beers</h1> </Link>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>

            <div className="card" style={{width: "50%", margin: '0 auto'}}>
            <img className="card-img-top" src="images/random-beer.png" alt="Card image cap"/>
            <div className="card-body">
            <Link to="/random-beer"><h1>Random Beer</h1> </Link>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>

            <div className="card" style={{width: "50%", margin: '0 auto'}}>
            <img className="card-img-top" src="images/new-beer.png" alt="Card image cap"/>
            <div className="card-body">
            <Link to="/new-beer"><h1>New Beer</h1> </Link>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
      </div>
    )
  }
}
