import React, { Component } from 'react';
import Beers from './Beers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import { Route, Link } from "react-router-dom";


class HomePage extends Component {
  render() {
    return(
      <div className="homepage-container">
        <div className="homepage-box">
          <img className="homepage-image" src="./images/beers.png" alt="beers"/>
          <Link to="/beers">All Beers</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero, qui non cumque fuga facere laudantium soluta
            officia dolorum totam eligendi autem dolor quidem ducimus nisi in accusamus atque expedita?</p>
        </div>
        <div className="homepage-box">
          <img className="homepage-image" src="./images/random-beer.png" alt="random beers"/>
          <Link to="/random-beer">Random Beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero, qui non cumque fuga facere laudantium soluta
            officia dolorum totam eligendi autem dolor quidem ducimus nisi in accusamus atque expedita?</p>
        </div>
        <div className="homepage-box">
          <img className="homepage-image" src="./images/new-beer.png" alt="new beer"/>
          <Link to="/new-beer">New Beer</Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo libero, qui non cumque fuga facere laudantium soluta
            officia dolorum totam eligendi autem dolor quidem ducimus nisi in accusamus atque expedita?</p>
        </div>
        

        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </div>

    )
  }
}

export default HomePage;