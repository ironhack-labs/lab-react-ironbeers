import React from "react";
import beersImg from "../assets/beers.png";
import newBeerImg from "../assets/new-beer.png";
import randomBeerImg from "../assets/random-beer.png";
import HomeCard from "../components/HomeCard";

function HomePage() {
  return (
    <div className="home">
      <HomeCard title="All Beers" image={beersImg} link="/beers">
        Lorem Ipsum
      </HomeCard>
      <HomeCard title="New Beer" image={newBeerImg} link="/new-beer">
        Lorem Ipsum
      </HomeCard>
      <HomeCard title="Random Beer" image={randomBeerImg} link="/random-beer">
        Lorem Ipsum
      </HomeCard>
    </div>
  );
}

export default HomePage;
