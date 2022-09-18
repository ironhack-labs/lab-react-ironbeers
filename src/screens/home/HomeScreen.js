import React from "react";
import { HomeCard } from "../../components";
import Beers from "../../assets/beers.png"
import Random from "../../assets/random-beer.png"
import New from "../../assets/new-beer.png"



function HomeScreen() {
  return (
    <div>
      <HomeCard title="All Beers" pic={Beers} path={"/beers"} />
      <HomeCard title="Random Beer" pic={Random} path={"/random"} />
      <HomeCard title="New Beer" pic={New} path={"/new"}/>
    </div>
  );
};

export default HomeScreen;