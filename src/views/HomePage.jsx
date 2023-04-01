import React from "react";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

import { HomePageLink } from "../components/misc/HomePage"

export const Home = () => {
    return (
        <div>
            <HomePageLink
                img={beers}
                title="All Beers"
                description="ALL BEERS - ALL BEERS"
                url="beers"
            />
            <HomePageLink
                img={randomBeer}
                title="Random Beer"
                description="RANDOM BEERS - RANDOM BEERS"
                url="random-beer"
            />
            <HomePageLink
                img={newBeer}
                title="New Beer"
                description="NEW BEER- NEW BEER"
                url="new-beer"
            />
        </div>
    );
};

