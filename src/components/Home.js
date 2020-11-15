import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>
        <img
          src="https://user-images.githubusercontent.com/23629340/40706572-933439b8-63ee-11e8-8d65-538fb59f79ab.png"
          alt=""
          height={600}
        />
      </div>
      <div>
        <div>
          <button>
            <NavLink
              to="/beers"
              activeStyle={{ fontWeight: 'bold', color: 'red' }}
            >
              See all the beers
            </NavLink>
          </button>
        </div>
        <div>
          <button>
            <Link to="/random-beer">Feeling adventurous?</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to="/new-beer">Show us your beer</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
