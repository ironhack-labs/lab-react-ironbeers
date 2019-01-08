import React from 'react';
import Card   from './Card';
import NavBar from '../NavBar';

const Home = ({getRandom}) => (
  <div className="page">
    <main>
      <NavBar home />
      <Card
        creator  = "Rhett Wesley"
        creatorA = "https://unsplash.com/@rhett__noonan?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        photo    = "img/beers.jpg"
        path     = "/beers"
      >All Beers</Card>
      <Card
        creator   = "Adam Wilson"
        creatorA  = "https://unsplash.com/@fourcolourblack?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        photo     = "img/random.jpg"
        path      = "/random"
        getRandom = {getRandom}
      >Random Beer</Card>
      <Card
        creator  = "Daniel Vogel"
        creatorA = "https://unsplash.com/@vogel11?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
        photo    = "img/new.jpg"
        path     = "/new"
      >New Beer</Card>
    </main>
  </div>
);

export default Home;