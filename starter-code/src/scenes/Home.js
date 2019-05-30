import React from 'react';
import Cards from '../components/Cards'
function Home() {
  return (
    <React.Fragment>
      <Cards name='All Beers' img='/beers.png'/>
      <Cards name='Random Beer' img='/random-beer.png'/>
      <Cards name='New Beer' img='/new-beer.png'/>
    </React.Fragment>
  );
}

export default Home;