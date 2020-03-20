import React from "react";
import HomeCard from "../components/HomeCard";
import beers from "../../public/images/beers.png";
import newBeer from "../../public/images/new-beer.png";
import randomBeer from "../../public/images/random-beer.png";
import text from "../../public/data/text.json";
import Home from "../layouts/Home";

const HomePage = () => {
  console.log(text.home);
  return (
    <Home>
      <HomeCard link="/beers" img={beers} header="All Beers" text={text.home} />
      <HomeCard link="/beers/random" img={randomBeer} header="Random Beer" text={text.home} />
      <HomeCard link="beers/new" img={newBeer} header="New Beer" text={text.home} />
    </Home>
  );
};

export default HomePage;
