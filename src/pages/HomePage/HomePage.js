import React from 'react';
import Section from '../../components/Section/Section';

function HomePage() {
  
  return (
    <div>
      <Section name="All Beers" img="../../img/beers.png" />
      <Section name="Random Beer" img="../../img/new-beer.png"/>
      <Section name="New Beer" img="../../img/new-beer.png"/>
    </div>
  );
}

export default HomePage;
