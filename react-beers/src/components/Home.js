import React from 'react';
import CardItem from './CardItem';


const Home = () => {
  return (
    <div className="cards-container">
      <CardItem title="All Beers" 
                route="/beers"
                image="9i2YH9vyfWQ" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Phasellus nec iaculis mauris."/>

          <CardItem title="Random Beer" 
                    route="/random-beer"
                    image="apEzgVPt5gA" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Phasellus nec iaculis mauris."/>

          <CardItem title="New Beer" 
                    route="/new-beer"
                    image="TqvqPyf15_k" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Phasellus nec iaculis mauris."/>

    </div>

  );
}

export default Home;