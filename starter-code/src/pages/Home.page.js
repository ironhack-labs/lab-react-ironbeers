import React from "react";
import imgBeers from "../../public/images/beers.png";
import imgRandomBeer from "../../public/images/random-beer.png";
import imgNewBeer from "../../public/images/new-beer.png";

import { SectionHome } from "../components/Section";
export const HomePage = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et tellus et eros dapibus vehicula a sit amet metus. Curabitur aliquam maximus est, vel imperdiet eros. Sed at nulla sodales, imperdiet leo non, faucibus odio. Vivamus ac ex urna. Cras ullamcorper lectus ut arcu lacinia, et facilisis sem hendrerit. Aliquam erat volutpat. Praesent vel finibus tellus. Sed tempor aliquam commodo. Etiam ut nunc ex. Vivamus condimentum non lectus et iaculis. Nunc consectetur tincidunt diam, eu porttitor tortor venenatis nec. In ultrices erat vel mattis faucibus. Aenean pretium viverra leo non efficitur. Ut et velit dui. Aenean feugiat facilisis interdum. Maecenas et sem pellentesque, volutpat augue at, lobortis ligula. Mauris et leo interdum, cursus risus non, pretium turpis.";

  const allBeersSection = {
    title: "All beers",
    img: imgBeers,
    description: description
  };
  const randomBeersSection = {
    title: "Ramdom Beer",
    img: imgRandomBeer,
    description: description
  };
  const newBeerSection = {
    title: "New beer",
    img: imgNewBeer,
    description: description
  };
  return (
    <>
      <SectionHome
        imgSrc={allBeersSection.img}
        imgTitle={allBeersSection.title}
        sectionTitle={allBeersSection.title}
        sectionDescription={allBeersSection.description}
      />
      <SectionHome
        imgSrc={randomBeersSection.img}
        imgTitle={randomBeersSection.title}
        sectionTitle={randomBeersSection.title}
        sectionDescription={randomBeersSection.description}
      />
      <SectionHome
        imgSrc={newBeerSection.img}
        imgTitle={newBeerSection.title}
        sectionTitle={newBeerSection.title}
        sectionDescription={newBeerSection.description}
      />
    </>
  );
};
