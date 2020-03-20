// dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// local modules
import beers from '../../public/images/beers.png';
import randomBeer from '../../public/images/random-beer.png';
import newBeer from '../../public/images/new-beer.png';

// styled components
import { Card, ImgContainer } from '../styles/PageContent';

export const Options = () => {
  const options = [
    {
      title: 'All beers',
      image: beers,
      description: 'Take a look at the beers list',
      link: 'beers'
    },
    {
      title: 'Random beer',
      image: randomBeer,
      description: 'Get a random beer from the list',
      link: 'beers/random'
    },
    {
      title: 'New beer',
      image: newBeer,
      description: 'Add a new beer to the list',
      link: 'beers/new'
    }
  ];

  return options.map(({ image, link, title, description }, i) => {
    return (
      <Card key={i}>
        <ImgContainer>
          <img src={image} />
        </ImgContainer>
        <div className="content">
          <Link to={link}>{title}</Link>
          <p>{description}</p>
        </div>
      </Card>
    );
  });
};
