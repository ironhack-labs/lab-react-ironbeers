import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/beers" className="home-div">
        <img className="home-images" src="/images/beers.jpg" alt="all beers" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dignissim fermentum urna, vehicula pulvinar lacus placerat at. In
          suscipit lobortis.
        </p>
      </Link>
      <Link to="/random-beer" className="home-div">
        <img
          className="home-images"
          src="/images/randomBeer.jpeg"
          alt="random beer"
        />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dignissim fermentum urna, vehicula pulvinar lacus placerat at. In
          suscipit lobortis.
        </p>
      </Link>
      <Link to="new-beer" className="home-div">
        <img
          className="home-images"
          src="/images/addBeers.jpg"
          alt="Add a beer"
        />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          dignissim fermentum urna, vehicula pulvinar lacus placerat at. In
          suscipit lobortis.
        </p>
      </Link>
    </div>
  );
}

export default Home;
