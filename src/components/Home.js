import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div>
        <img src="/images/De-bar.jpg" alt="Bar" />
        <Link to="/beers">
          <h2>All Beers</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
          purus, consequat id imperdiet sit amet, ultricies vitae libero.
        </p>
      </div>
      <div>
        <img src="/images/speciaalbierheader1.jpg" alt="Special beers" />
        <Link to="/random-beer">
          <h2>View a Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
          purus, consequat id imperdiet sit amet, ultricies vitae libero.
          Vestibulum fermentum pulvinar sem ac iaculis.liquam lacinia dapibus
          urna, consequat ullamcorper leo molestie eu.
        </p>
      </div>
      <div>
        <img src="/images/how-to-brew-beer.jpg" alt="One beer" />
        <Link to="/new-beer">
          <h2>Add a Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc
          purus, consequat id imperdiet sit amet, ultricies vitae libero.
          Vestibulum fermentum pulvinar sem ac iaculis. Etiam at nisl eu quam
          fermentum faucibus ac ut tellus.
        </p>
      </div>
    </div>
  );
}

export default Home;
