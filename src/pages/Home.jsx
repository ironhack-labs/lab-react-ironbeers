import React from 'react';
import Hero from '../components/Hero/Hero';
import PageLinkCard from '../components/PageLinkCard/PageLinkCard';

import beerPic from '../assets/beers.png';
import newBeerPic from '../assets/new-beer.png';
import randomBeerPic from '../assets/random-beer.png';

const Home = () => {
  return (
    <div>
      <Hero />
      <h1>IRON BEERS</h1>
      <PageLinkCard image={beerPic} title={"All beers"} pageLink={'/beers'}>
        The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href.
      </PageLinkCard>  
      <PageLinkCard image={newBeerPic} title={"New beer"} pageLink={'/new-beer'}>
        The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href.
      </PageLinkCard>
      <PageLinkCard image={randomBeerPic} title={"Random beer"} pageLink={'/random-beer'}>
        The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href.
      </PageLinkCard>   
    </div>
  )
}

export default Home;
