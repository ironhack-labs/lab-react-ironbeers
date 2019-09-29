import React, { Component } from 'react'
import HomeSection from "./HomeSection";

class Home extends Component {
    render() {
        const allBeers = { img: "images/beers.png", title: "All Beers", link:"/all-beers"};
        const randomBeer = { img: "images/random-beer.png", title: "Random Beer",link:"/random-beer" };
        const newBeer = { img: "images/new-beer.png", title: "New Beer",link:"/new-beer" };
        return (
          <div className="App">
            <HomeSection content={allBeers} />
            <HomeSection content={randomBeer} />
            <HomeSection content={newBeer} />
          </div>
        );
      }
}

export default Home
