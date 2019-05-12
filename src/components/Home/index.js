import React from 'react';

import './index.css';
import Card from './Card';

const Home = () => (
  <section className="Home">
    <Card
      imageUrl="/img/beers.png"
      title="All Beers"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum, deserunt quibusdam optio sequi, ut est architecto adipisci."
      href="/beers"
    />
    <Card
      imageUrl="/img/random-beer.png"
      title="Random Beer"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum, deserunt quibusdam optio sequi, ut est architecto adipisci."
      href="/random-beer"
    />
    <Card
      imageUrl="/img/new-beer.png"
      title="New Beer"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis cum, deserunt quibusdam optio sequi, ut est architecto adipisci."
      href="/new-beer"
    />
  </section>
);

export default Home;
