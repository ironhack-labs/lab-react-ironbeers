import React, { Component } from 'react';
 import Card from '../components/Card';

class Home extends Component {
  state = {
    beers: [],
  };
  render() {
    return (
      <div className=" row d-flex-col align-items-center">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <Card
            title="All Beer"
            text="Explore our whole catalog"
            imgSrc="/images/beers.png"
            route="/beers"
          />
        </div>
        <div className=" align-self-center col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <Card
            title="Random Beer"
            text="Or view a random beer"
            imgSrc="/images/random-beer.png"
            route="/random-beer"
          />
        </div>
        <div className=" align-self-center col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
          <Card
            title="New Beer"
            text="Or register a new beer"
            imgSrc="/images/new-beer.png"
            route="/new-beer"
          />
        </div>
      </div>
    );
  }
}

export default Home;
