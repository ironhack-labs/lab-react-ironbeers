import React from "react";
import beers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";

import { HomePageLink } from "../../components/misc/HomePageLink/HomePageLink";

export const Home = () => {
  return (
    <div>
      <HomePageLink
        img={beers}
        title="All Beers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt velit quis rhoncus dignissim. In rutrum finibus lectus, eget feugiat."
        url="beers"
      />
      <HomePageLink
        img={randomBeer}
        title="Random Beer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt velit quis rhoncus dignissim. In rutrum finibus lectus, eget feugiat."
        url="random-beer"
      />
      <HomePageLink
        img={newBeer}
        title="New Beer"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt velit quis rhoncus dignissim. In rutrum finibus lectus, eget feugiat."
        url="new-beer"
      />
    </div>
  );
};
