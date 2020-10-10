import React from 'react';

import Card from './Card';

const Cards = [
  {
    title: 'All Beers',
    description: 'View all beers',
    image: './images/beer1.jpg',
    route: '/beers',
  },
  {
    title: 'Random Beer',
    description: 'Feeling lucky? View a tasty random beer.',
    image: './images/beer2.jpg',
    route: '/random-beer',
  },
  {
    title: 'New Beer',
    description: 'Add an awesom beer in our list',
    image: './images/beer3.jpg',
    route: '/new-beer',
  },
];

const Home = () => {
  return (
    <div>
      {Cards.map((card, i) => (
        <Card {...card} key={i} />
      ))}
    </div>
  );
};

export default Home;
