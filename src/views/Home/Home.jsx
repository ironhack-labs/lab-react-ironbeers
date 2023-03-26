import React from "react";
import beerImg from "../../assets/beers.png";
import randomImg from "../../assets/random-beer.png";
import newImg from "../../assets/new-beer.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <Link
          className="linkbeer"
          to="beers"
          style={{ textDecoration: "none" }}
        >
          <div className="card">
            <img src={beerImg} alt="beers" />
            <h2>All beers</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
        <Link
          className="linkbeer"
          to="beers/random"
          style={{ textDecoration: "none" }}
        >
          <div className="card">
            <img src={randomImg} alt="Randombeer" />
            <h2>Random Beer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
        <Link
          className="linkbeer"
          to="beers/new"
          style={{ textDecoration: "none" }}
        >
          <div className="card">
            <img src={newImg} alt="NewBeer" />
            <h2>New beer</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
