import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div className="Home">
      <section>
        <img
          src="https://www.tripsavvy.com/thmb/I3Lf3oqbsZHgH2ecTT8hHbXJ3x0=/2121x1414/filters:fill(auto,1)/GettyImages-462573477-5932c9dd3df78c08abef9eea.jpg"
          alt="Beer1"
        />
        <Link to="/beers">
          <h2>All Beers</h2>
        </Link>
        <p>Check out all our beers!</p>
      </section>
      <section>
        <img
          src="https://p2d7x8x2.stackpathcdn.com/wordpress/wp-content/uploads/2018/11/Greene-King-heads-new-Old-Speckled-Hen-low-alcohol-beer_wrbm_large-640x360.jpg"
          alt="Beer2"
        />
        <Link to="/Random">
          <h2>Random Beer</h2>
        </Link>
        <p>Let us choose a random beer for you!</p>
      </section>
      <section>
        <img
          src="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/image_data/file/86358/s960_englishpub-iStock-455939119.jpg"
          alt="Beer3"
        />
        <Link to="/NewBeers">
          <h2>New Beer</h2>
        </Link>
        <p>Add a new beer!</p>
      </section>
    </div>
  );
};

export default Home;
