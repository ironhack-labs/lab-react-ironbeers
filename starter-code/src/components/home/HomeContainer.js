import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomeContainer extends Component {
  render() {
    return (
      <div id="main" className="container">
      <h1 className="text-center">Ironbeers</h1>
        <div className="row">
          <div className="col-12">
            <img className="home-image" src="../images/beers.png" alt="All Beers"/>
            <Link to="/beers"> <button className="btn btn-info btn-block home-btn">All beers</button></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img className="home-image" src="../images/random-beer.png" alt="Random Beer"/>
            <Link to="/beers/random"> <button className="btn btn-info btn-block home-btn">Random beer</button></Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <img className="home-image" src="../images/new-beer.png" alt="New Beer"/>
            <Link to="/beer-form"> <button className="btn btn-info btn-block home-btn">New beer</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer;