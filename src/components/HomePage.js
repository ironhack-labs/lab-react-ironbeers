import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="App d-flex ">
      <Link to={'/beers'}>
        <div className="container">
          <h2>All Beers</h2>
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sagittis viverra augue, vitae mollis est. Nulla facilisis et nibh
              quis cursus.
            </p> */}
        </div>
      </Link>

      <Link to={'/randombeer'}>
        <div className="container">
          <h2>Random Beer</h2>
          {/*  <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sagittis viverra augue, vitae mollis est. Nulla facilisis et nibh
              quis cursus.
            </p> */}
        </div>
      </Link>

      <Link to={'/newbeer'}>
        <div className="container">
          <h2>New Beer</h2>
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              sagittis viverra augue, vitae mollis est. Nulla facilisis et nibh
              quis cursus.
            </p> */}
        </div>
      </Link>
    </div>
  );
}

export default HomePage;
