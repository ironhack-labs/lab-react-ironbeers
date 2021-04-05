import React from 'react';
import SectionHome from '../SectionHome/SectionHome';

const Home = () => {
  return (
    <div className="Home">
      <SectionHome title="All beers" img="../../assets/beers.png"  route="/beers"/>
      <SectionHome title="Random beers" img="/assets/random-beer.png" route="/random-beer"/>
      <SectionHome title="New beer" img="../../assets/new-beer.png" route="/new-beer"/>
    </div>
  );
};

export default Home;