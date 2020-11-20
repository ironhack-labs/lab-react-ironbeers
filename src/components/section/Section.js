import React from 'react';
import Home from '../home/Home';
import logo from '../image/beer-all.jpg';

function Section() {
  return (  
    <div>
      <Home
        image={logo}
        title="All Beers"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      />
      <Home
        image={logo}
        title="Random Beer"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      />
      <Home
        image={logo}
        title="New Beer"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
      />
    </div>
  );
}

export default Section;
