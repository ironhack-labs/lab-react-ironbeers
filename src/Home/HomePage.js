import React from 'react';

import CardHome from './CardHome';

function HomePage(porps) {
  return (
    <div className="dfc-jc-ac">
      <CardHome
        img="https://thehalfwall.com/wp-content/uploads/2016/08/sliderimg.jpg"
        title="All Beers"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sem magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        link="/beers"
      />
      <CardHome
        img="https://doveandolive.com.au/wp-content/uploads/2013/08/LongBanner_craft-beer-taps-2.jpg"
        title="Random Beer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel convallis tortor. Etiam tincidunt bibendum ex in pellentesque. Sed nunc quam, tristique id ultrices vel, placerat a mauris."
        link="/random-beer"
      />
      <CardHome
        img="https://philly.thedrinknation.com/images/articles/2011-11-01-perch-pub-taps.jpg"
        title="New Beer"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet lacinia velit. Vivamus eleifend neque non faucibus congue. Quisque maximus elementum tortor, eget venenatis orci porttitor in."
        link="/new-beer"
      />
    </div>
  );
}

export default HomePage;
