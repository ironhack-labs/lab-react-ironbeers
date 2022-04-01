import React from "react";
import allBeers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  function goTo(url) {
    navigate(url);
  }

  const allBeersStyle = {
    backgroundImage: `url(${allBeers})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `cover`,
    width: "100%",
    height: "50%",
  };

  const randomBeerStyle = {
    backgroundImage: `url(${randomBeer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `cover`,
    width: "100%",
    height: "50%",
  };

  const newBeerStyle = {
    backgroundImage: `url(${newBeer})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `cover`,
    width: "100%",
    height: "50%",
  };

  const sectionStyle = {
    height: "33.33vh",
  };

  return (
    <div>
      <section
        style={sectionStyle}
        onClick={(event) => {
          goTo("/beers");
        }}
      >
        <div style={allBeersStyle}></div>
        <div className="container">
          <h2>All Beers</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section
        style={sectionStyle}
        onClick={(event) => {
          goTo("/random-beer");
        }}
      >
        <div style={randomBeerStyle}></div>
        <div className="container ">
          <h2>Random Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section
        style={sectionStyle}
        onClick={(event) => {
          goTo("/new-beer");
        }}
      >
        <div style={newBeerStyle}></div>
        <div className="container">
          <h2>New Beer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
