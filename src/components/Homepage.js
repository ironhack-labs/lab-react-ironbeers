import React from 'react';
import { Link } from 'react-router-dom';

import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';

const Homepage = () => {
  return (
    <div>
      <img
        className="imgHp"
        src="https://optclean.com.br/wp-content/uploads/2017/08/banner-cervejas.jpg"
        alt="cerveja"
      />
      <Link to={'/beers'}>
        {' '}
        <h1>All Beers</h1>{' '}
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
        quod eligendi facilis deserunt odio delectus ducimus, in ipsum
        voluptatum!
      </p>
      <img
        className="imgHp"
        src="https://img.freepik.com/fotos-gratis/um-copo-de-fotografia-macro-de-cerveja-gelada_53876-65291.jpg?size=626&ext=jpg"
        alt="cerveja2"
      />
      <Link to={'/random-beer'}>
        {' '}
        <h1>Random Beers</h1>{' '}
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
        quod eligendi facilis deserunt odio delectus ducimus, in ipsum
        voluptatum!
      </p>
      <img
        className="imgHp"
        src="https://st3.depositphotos.com/1004373/12593/i/600/depositphotos_125932840-stock-photo-glass-of-beer.jpg"
        alt="cerveja3"
      />
      <Link to={'/new-beer'}>
        <h1>New Beer</h1>
      </Link>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
        quod eligendi facilis deserunt odio delectus ducimus, in ipsum
        voluptatum!
      </p>
    </div>
  );
};

export default Homepage;
