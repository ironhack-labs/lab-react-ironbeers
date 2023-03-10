// import React library and Link component from react-router-dom library
import React from "react";
import { Link } from "react-router-dom";

// import image assets for the links
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";

// Define Homepage functional component
function Homepage() {
  return (
    // JSX code for the homepage
    <div className="homepage">
      <h1 className="homepage__title">Ironbeers React Training</h1>
      <p className="homepage__subtitle">
        Welcome to Ironbeers! Click on the links below to check out our beers:
      </p>

      {/* Container for the images and links */}
      <div className="homepage__links">

        {/* First link to All Beers */}
        <img src={beersImg} alt="Beers" className="homepage__link-image" />
        <ul className="homepage__links-list">
          <li className="homepage__link-item">
            {/* Link to the /beers route */}
            <Link to="/beers" className="homepage__link">
              All Beers
            </Link>
            {/* Description of the link */}
            <p className="homepage__link-description">Click above to see our great selection of beers</p>
          </li>
        </ul>

        {/* Second link to Random Beer */}
        <img src={randomBeerImg} alt="Random-Beer" className="homepage__link-image" />
        <ul className="homepage__links-list">
          <li className="homepage__link-item">
            {/* Link to the /random-beer route */}
            <Link to="/random-beer" className="homepage__link">
              Random Beer
            </Link>
            {/* Description of the link */}
            <p className="homepage__link-description">Interested in finding out about one of our drinks? Click above to find out about one of our beers </p>
          </li>
        </ul>

        {/* Third link to New Beer */}
        <img src={newBeerImg} alt="New-Beer" className="homepage__link-image" />
        <ul className="homepage__links-list">
          <li className="homepage__link-item">
            {/* Link to the /new-beer route */}
            <Link to="/new-beer" className="homepage__link">
              New Beer
            </Link>
            {/* Description of the link */}
            <p className="homepage__link-description">Want to add something new to our roster? Click above to add a new beer</p>
          </li>
        </ul>

      </div>
    </div>
  );
}

// Export the Homepage component as the default export
export default Homepage;
