import React from "react";
import HomeCard from "../../components/home-cards/HomeCard";
import beers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";

function HomePage() {
  return (
    <div className="d-flex flex-column my-3">
      <HomeCard img={beers} title="All Beers" url="/beers" />
      <HomeCard img={randomBeer} title="Random Beer" url="/random-beer" />
      <HomeCard img={newBeer} title="New Beer" url="/new-beer" />
    </div>
  );
}

export default HomePage;
