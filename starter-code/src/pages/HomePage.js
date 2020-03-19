import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {

  return(
    <div>
      <img src={'./images/beers.png'} alt='Beers'></img>
      <Link to='/beers'>All Beers</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis velit ut risus pulvinar hendrerit eget et eros. Sed quis arcu nulla. Suspendisse ullamcorper eu velit et malesuada.</p>
      <img src={'./images/random-beer.png'} alt='Beers'></img>
      <Link to='/random-beer'>Random Beer</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis velit ut risus pulvinar hendrerit eget et eros. Sed quis arcu nulla. Suspendisse ullamcorper eu velit et malesuada.</p>
      <img src={'./images/new-beer.png'} alt='Beers'></img>
      <Link to='/new-beer'>New Beer</Link>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis velit ut risus pulvinar hendrerit eget et eros. Sed quis arcu nulla. Suspendisse ullamcorper eu velit et malesuada.</p>
    </div>

  );
}

export default HomePage;