import React from 'react';
import Cards from '../components/Cards'
function Home() {
  return (
    <React.Fragment>
      <Cards name='All Beers' img='/beers.png' link = '/all'/>
      <Cards name='Random Beer' img='/random-beer.png' link = '/random'/>
      <Cards name='New Beer' img='/new-beer.png' link = '/new'/>
    </React.Fragment>
  );
}

export default Home;