import React from "react";
import { Link } from "react-router-dom";
import beerImage from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div className="homepage">
      <div>
        <img src={beerImage} alt="Beersimage" />
        <Link to="/beers">
          {" "}
          <h1>All Beers</h1>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est totam
          non, nobis doloribus rerum a provident dolorem necessitatibus soluta
          autem dolor dignissimos nam aspernatur dolores rem amet aliquid
          impedit sequi.
        </p>
      </div>
      <div>
        <img src={randomBeer} alt="randombeer" />
        <Link to="/randombeer">
          {" "}
          <h1>Random Beer</h1>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est totam
          non, nobis doloribus rerum a provident dolorem necessitatibus soluta
          autem dolor dignissimos nam aspernatur dolores rem amet aliquid
          impedit sequi.
        </p>
      </div>
      <div>
        <img src={newBeer} alt="newbeer" />
        <Link to="/newbeer">
          {" "}
          <h1>New Beer</h1>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est totam
          non, nobis doloribus rerum a provident dolorem necessitatibus soluta
          autem dolor dignissimos nam aspernatur dolores rem amet aliquid
          impedit sequi.
        </p>
      </div>
    </div>
  );
}

export default Home;
