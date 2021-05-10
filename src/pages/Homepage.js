import React, { Component } from 'react';
import beersImg from '../assets/beers.png';
import randomImg from '../assets/random-beer.png';
import newImg from '../assets/new-beer.png';
import './Homepage.css'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Homepage">
        <div className="homePart">
          <img src={beersImg} />
          <a href="/beers"><h1>All Beers</h1></a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="homePart">
          <img src={randomImg} />
          <a href="/random-beer"><h1>Random Beer</h1></a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="homePart">
          <img src={newImg} />
          <a href="/new"><h1>Create Beer</h1></a>
          <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. </p>
        </div>
      </div>
    );
  }
}

export default Homepage;
