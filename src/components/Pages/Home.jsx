import React from 'react';
import Navbar from '../Navbar';
import Section from '../UI/Section';
import imgAllBeers from '../../assets/beers.png';
import imgNewBeer from '../../assets/new-beer.png';
import imgRandomBeer from '../../assets/random-beer.png';

const Home = (props) => {
  const allBeersContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the";
  const newBeerContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the";
  const randomBeerContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the";

  return (
    <div>
      <Navbar></Navbar>

      <Section
        imgUrl={imgAllBeers}
        headline="All Beers"
        linkUrl="listOfBeers"
        content={allBeersContent}
      />
      <Section
        imgUrl={imgRandomBeer}
        headline="Random Beer"
        content={randomBeerContent}
        linkUrl="randomBeer/"
      />
      <Section
        imgUrl={imgNewBeer}
        headline="New Beer"
        content={newBeerContent}
        linkUrl="newBeer/"
      />
    </div>
  );
};

export default Home;
