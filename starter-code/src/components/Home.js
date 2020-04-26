import React from 'react';
import HomeSection from './HomeSection';

const Home = () => {
  return (
    <div className='home'>
      <HomeSection
        URL='/beers'
        image='/images/beers.png'
        title='All Beers'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.'
      />
      <HomeSection
        URL='/random-beer'
        image='/images/random-beer.png'
        title='Random Beer'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.'
      />
      <HomeSection
        URL='/new-beer'
        image='/images/new-beer.png'
        title='New Beer'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam maximus, risus a dapibus convallis, magna lorem porttitor eros, vitae venenatis magna arcu a nunc.'
      />
    </div>
  );
}

export default Home;
