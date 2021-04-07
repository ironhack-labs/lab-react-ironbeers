import React from 'react';
import imgAllBeers from '../../assets/beers.png';
import imgRandomBeers from '../../assets/random-beer.png';
import imgNewBeer from '../../assets/new-beer.png';
import Section from './Section';

const Home = () => {
  return (
    <article>
      <Section
        to="/beers"
        src={imgAllBeers}
        title="All Beers"
        description="Lorem fistrum pecador de la pradera pecador caballo blanco caballo negroorl diodenoo se calle ustée papaar papaar."
      />{' '}
      <Section
        to="/random-beer"
        src={imgRandomBeers}
        title="Random Beer"
        description="Lorem fistrum pecador de la pradera pecador caballo blanco caballo negroorl diodenoo se calle ustée papaar papaar."
      />{' '}
      <Section
        to="/new-beer"
        src={imgNewBeer}
        title="New Beer"
        description="Lorem fistrum pecador de la pradera pecador caballo blanco caballo negroorl diodenoo se calle ustée papaar papaar."
      />
    </article>
  );
};

export default Home;
