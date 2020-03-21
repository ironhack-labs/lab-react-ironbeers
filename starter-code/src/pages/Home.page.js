import React from "react";
import { Link } from "react-router-dom";

import imgBeers from "../../public/images/beers.png";
import imgRandomBeer from "../../public/images/random-beer.png";
import imgNewBeer from "../../public/images/new-beer.png";

import { SectionHome } from "../components/Section";
export const HomePage = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et tellus et eros dapibus vehicula a sit amet metus. Curabitur aliquam maximus est, vel imperdiet eros. Sed at nulla sodales, imperdiet leo non, faucibus odio. Vivamus ac ex urna. Cras ullamcorper lectus ut arcu lacinia, et facilisis sem hendrerit. Aliquam erat volutpat. Praesent vel finibus tellus. Sed tempor aliquam commodo.";

  const allBeersSection = {
    title: "All beers",
    img: imgBeers,
    description: description,
    link: "/beers",
    c2a: "VIEW ALL BEERS"
  };
  const randomBeersSection = {
    title: "Ramdom Beer",
    img: imgRandomBeer,
    description: description,
    link: "/random-beer",
    c2a: "GET A RANDOM BEER"
  };
  const newBeerSection = {
    title: "New beer",
    img: imgNewBeer,
    description: description,
    link: "/new-beer",
    c2a: "ADD A NEW BEER"
  };

  return (
    <>
      <SectionHome
        imgSrc={allBeersSection.img}
        imgTitle={allBeersSection.title}
        sectionTitle={allBeersSection.title}
        sectionDescription={allBeersSection.description}
        sectionLink={allBeersSection.link}
        sectionC2a={allBeersSection.c2a}
      />
      <SectionHome
        imgSrc={randomBeersSection.img}
        imgTitle={randomBeersSection.title}
        sectionTitle={randomBeersSection.title}
        sectionDescription={randomBeersSection.description}
        sectionLink={randomBeersSection.link}
        sectionC2a={randomBeersSection.c2a}
      />
      <SectionHome
        imgSrc={newBeerSection.img}
        imgTitle={newBeerSection.title}
        sectionTitle={newBeerSection.title}
        sectionDescription={newBeerSection.description}
        sectionLink={newBeerSection.link}
        sectionC2a={newBeerSection.c2a}
      />
    </>
  );
};
