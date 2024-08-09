import React from "react";
import { Link } from "react-router-dom";
import allBeersImg from "../assets/beers.png"; // Update the path if necessary
import randomBeerImg from "../assets/random-beer.png"; // Update the path if necessary
import newBeerImg from "../assets/new-beer.png"; // Update the path if necessary

function HomePage() {
  return (
    <div>
      <Link to="/beers" className="home-page-link">
        <img src={allBeersImg} alt="All Beers" className="home-page-img" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </Link>

      <Link to="/random-beer" className="home-page-link">
        <img src={randomBeerImg} alt="Random Beer" className="home-page-img" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </Link>

      <Link to="/new-beer" className="home-page-link">
        <img src={newBeerImg} alt="New Beer" className="home-page-img" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          pharetra egestas lectus, sit amet eleifend ex tincidunt in. Nam dictum
          arcu ut dignissim varius.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
