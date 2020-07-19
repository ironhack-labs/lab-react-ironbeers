import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to="/beers">
        <img
          src="https://images.unsplash.com/photo-1505075106905-fb052892c116"
          className="homeImgs"
          alt=""
        />
        <div className="container">
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pretium risus nec euismod pulvinar. Nulla egestas luctus erat, sit
            amet pulvinar orci facilisis vel. Fusce elementum nisl vitae posuere
            pellentesque.
          </p>
        </div>
      </Link>
      <Link to="/random-beer">
        <img
          src="https://images.unsplash.com/photo-1507310951869-fe0941df4dbd"
          className="homeImgs"
          alt=""
        />
        <div className="container">
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pretium risus nec euismod pulvinar. Nulla egestas luctus erat, sit
            amet pulvinar orci facilisis vel. Fusce elementum nisl vitae posuere
            pellentesque.
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <img
          src="https://images.unsplash.com/photo-1532634726-8b9fb99845fd"
          className="homeImgs"
          alt=""
        />
        <div className="container">
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            pretium risus nec euismod pulvinar. Nulla egestas luctus erat, sit
            amet pulvinar orci facilisis vel. Fusce elementum nisl vitae posuere
            pellentesque.
          </p>
        </div>
      </Link>
    </>
  );
};

export default Home;
