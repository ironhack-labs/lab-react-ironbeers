import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="link-info-all">
        <Link to="/beers">
          <img src="images/Screenshot 2020-11-29 at 13.57.20.png" alt="beer1" />
          <h2>All Beers</h2>
        </Link>
        <p>
          Microdosing kale chips literally artisan vaporware fashion axe blog
          kombucha chicharrones roof party flexitarian cloud bread cliche.
          Forage vice cred cardigan kale chips woke cliche salvia yuccie.
        </p>
      </div>
      <div className="link-info-random">
        <Link to="/random-beer">
          <img src="images/Screenshot 2020-11-29 at 13.57.36.png" alt="beer2" />
          <h2>Random Beer</h2>
        </Link>
        <p>
          Pop-up flexitarian paleo, retro af ugh disrupt prism copper mug
          activated charcoal gluten-free ennui. Coloring book farm-to-table
          succulents, tofu iceland post-ironic man braid paleo vaporware hella.
        </p>
      </div>
      <div className="link-info-new">
        <Link to="new-beer">
          <img src="images/Screenshot 2020-11-29 at 13.57.51.png" alt="beer3" />
          <h2>New Beer</h2>
        </Link>
        <p>
          Swag adaptogen jianbing etsy mixtape lumbersexual venmo snackwave
          asymmetrical pickled cliche. Normcore air plant mustache, subway tile
          whatever kinfolk sriracha raw denim PBR&B sustainable schlitz +1.
        </p>
      </div>
    </div>
  );
};

export default Home;
