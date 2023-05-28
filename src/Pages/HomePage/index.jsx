import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";
import beers from "../../assets/beers.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <div className="all-beers">
          <img src={beers} alt="beers"/>
        </div>
        <div className="all-beers-info">
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </Link>
      <Link to="/random">
        <div className="random-beer">
          <img src={randomBeer} alt="random-beer"/>
        </div>
        <div className="random-beer-info">
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div className="new-beer">
          <div className="new-beer-img">
            <img src={newBeer} alt="new-beer"/>
          </div>
          <div className="new-beer-info">
            <h1>New Beer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePage;