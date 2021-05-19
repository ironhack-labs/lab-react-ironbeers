import React from 'react';

import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <Link to="/beers">
        <img src="/assets/beers.png" alt="Image missing" />
        <div>
          <h3>All Beers</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam
            soluta in consequuntur quis numquam.
          </p>
        </div>
      </Link>
      <Link to="/random-beer">
        <img src="/assets/random-beer.png" alt="Image missing" />
        <div>
          <h3>Random Beer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
            optio nam debitis placeat dignissimos a.
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <img src="/assets/new-beer.png" alt="Image missing" />
        <div>
          <h3>New Beer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            voluptas, obcaecati ea aut quas nobis.
          </p>
        </div>
      </Link>
    </div>
  );
}
