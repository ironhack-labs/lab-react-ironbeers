import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage-links">
      <h1>HOMEPAGE</h1>
      <div className = "buttons">
        <button>
          <Link to="/beers">ALL BEERS</Link>
        </button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className = "buttons">
        <button>
          <Link to="/random-beer" >RANDOM BEER</Link>
        </button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className = "buttons">
        <button>
          <Link to="/new-beer">NEW BEER</Link>
        </button>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default Home;
