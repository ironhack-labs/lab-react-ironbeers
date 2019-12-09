import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default class Home extends React.Component {
  randomBeer = () => {
    console.log("here");
    let beerArray = this.props.beers.map(each => {
      return each._id;
    });
    return beerArray[Math.floor(Math.random() * beerArray.length)];
  };

  render() {
    return (
      <div className="whole">
        <div className="all-beers whole-containers">
          <img src="./../images/beers.png" className="beer-imgs" alt="all" />

          <h3 className="homepage-p">Look at all the beers</h3>
          <Link to={"/All/"} className="allbeer-link">
            All Beers
          </Link>
        </div>
        <div className="random-beer whole-containers">
          <img
            src="./../images/random-beer.png"
            className="beer-imgs"
            alt="random"
          />

          <h3 className="homepage-p">Find a random beer</h3>
          <Link to="/random" className="allbeer-link">
            Random Beer
          </Link>
        </div>
        <div className="new-beer whole-containers">
          <img src="./../images/new-beer.png" className="beer-imgs" alt="new" />

          <h3 className="homepage-p">Input a new beer</h3>

          <Link to={"/newbeer"} className="allbeer-link">
            New Beers
          </Link>
        </div>
      </div>
    );
  }
}
