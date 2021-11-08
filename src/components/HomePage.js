import React from "react";
import beersImg from '.././assets/beers.png';
import newBeerImg from '.././assets/new-beer.png';
import randomBeer from '.././assets/random-beer.png';
import { Link } from "react-router-dom";

class Homepage extends React.Component {
    render() {
        return (
          <div className="homepage">
            <h1>IronBeers</h1>
            <Link to="/beers">
              <div>
                <img src={beersImg} alt="beers" />
                <h2>All Beers</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam libero dignissim, posuere mauris nec, aliquam sapien.
                  Phasellus interdum enim eu dui ornare volutpat at sit amet
                  justo. Praesent commodo, justo pulvinar bibendum varius, metus
                  est pretium libero, sed fringilla orci turpis sit amet dui.
                </p>
              </div>
            </Link>
            <Link to="/random-beer">
              <div>
                <img src={newBeerImg} alt="random beer" />
                <h2>Random Beer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam libero dignissim, posuere mauris nec, aliquam sapien.
                  Phasellus interdum enim eu dui ornare volutpat at sit amet
                  justo. Praesent commodo, justo pulvinar bibendum varius, metus
                  est pretium libero, sed fringilla orci turpis sit amet dui.
                </p>
              </div>
            </Link>
            <Link to="/new-beer">
              <div>
                <img src={randomBeer} alt="new beer" />
                <h2>New Beer</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  aliquam libero dignissim, posuere mauris nec, aliquam sapien.
                  Phasellus interdum enim eu dui ornare volutpat at sit amet
                  justo. Praesent commodo, justo pulvinar bibendum varius, metus
                  est pretium libero, sed fringilla orci turpis sit amet dui.
                </p>
              </div>
            </Link>
          </div>
        );
    }
}

export default Homepage