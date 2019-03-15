import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="Bloc-Beer">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/light-beers-for-national-beer-day-main-0-1518558278.jpg"
          alt="beers"
          className="images"
        />
        <Link to={`/beers`} className="link">
          All Beers
        </Link>
        <p>
          Nemo quaeso miretur, si post exsudatos labores itinerum longos
          congestosque adfatim commeatus fiducia vestri ductante barbaricos
          pagos adventans velut mutato repente consilio ad placidiora deverti.
        </p>
      </div>

      <div className="Bloc-Beer">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/light-beers-for-national-beer-day-main-0-1518558278.jpg"
          alt="random-beer"
          className="images"
        />
        <Link to={`/random-beer`} className="link">
          Random Beers
        </Link>
        <p>
          Nemo quaeso miretur, si post exsudatos labores itinerum longos
          congestosque adfatim commeatus fiducia vestri ductante barbaricos
          pagos adventans velut mutato repente consilio ad placidiora deverti.
        </p>
      </div>

      <div className="Bloc-Beer">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/light-beers-for-national-beer-day-main-0-1518558278.jpg"
          alt="random-beer"
          className="images"
        />
        <Link to={`/new-beer`} className="link">
          New Beer
        </Link>
        <p>
          Nemo quaeso miretur, si post exsudatos labores itinerum longos
          congestosque adfatim commeatus fiducia vestri ductante barbaricos
          pagos adventans velut mutato repente consilio ad placidiora deverti.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
