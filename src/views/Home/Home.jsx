import React from "react";
import { Link, useLocation } from "react-router-dom";
import AllBeersImg from "../../assets/beers.png";
import RandomBeerImg from "../../assets/random-beer.png";
import NewBeerImg from "../../assets/new-beer.png";
import "./Home.css";

const Home = () => {
const { pathname } = useLocation();
console.log(pathname);
    return (
      <div className="home">
        <div className="cat">
          <img src={AllBeersImg} alt="all-beers" />
          <Link to={"/beers"} style={{ textDecoration: "none" }}>
            All Beers
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="cat">
          <img src={RandomBeerImg} alt="random-beers" />
          <Link to={"/beers/random"} style={{ textDecoration: "none" }}>
            Random Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="cat">
          <img src={NewBeerImg} alt="new-beers" />
          <Link to={"/beers/new-beer"} style={{ textDecoration: "none" }}>
            New Beer
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
};

export default Home;
