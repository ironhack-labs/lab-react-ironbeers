import React from "react";
import beer from "../assets/beers.png";
import randombeer from "../assets/random-beer.png";
import newbeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div>
        <img className="homeimg" src={beer} alt="allbeers" />
        <Link to="/beers">
          <h4>All Beers</h4>
        </Link>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad minus ab
          aperiam commodi esse quas porro dicta, sint laboriosam non sequi
          ipsam, suscipit possimus fugiat ex repellat eligendi debitis earum!
        </p>
      </div>
      <div>
        <img className="homeimg" src={randombeer} alt="randombeer" />
        <Link to="/random-beer">
          <h4>Random Beer</h4>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad minus ab
          aperiam commodi esse quas porro dicta, sint laboriosam non sequi
          ipsam, suscipit possimus fugiat ex repellat eligendi debitis earum!
        </p>
      </div>
      <div>
        <img className="homeimg" src={newbeer} alt="newbeer" />
        <Link to="/new-beer">
          <h4>New Beer</h4>
        </Link>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad minus ab
          aperiam commodi esse quas porro dicta, sint laboriosam non sequi
          ipsam, suscipit possimus fugiat ex repellat eligendi debitis earum!
        </p>
      </div>
    </div>
  );
}

export default HomePage;