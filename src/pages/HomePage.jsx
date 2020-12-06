import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Link className="links" to="/beers">
        <div className="homepageBlock">
          <div className="blockImage">Image would go here</div>
          <div className="blockText">
            <h1 className="blockHeading">All Beers</h1>
            <p>
              Adipisicing consectetur sint ad duis eiusmod et aliquip sit. Elit
              reprehenderit veniam tempor do esse. Minim ex fugiat ipsum
              voluptate aute duis consectetur adipisicing. Voluptate duis
              pariatur id elit enim et. Non dolor culpa ex velit deserunt
              laboris.
            </p>
          </div>
        </div>
      </Link>
      <Link className="links" to="random-beer">
        <div className="homepageBlock">
          <div className="blockImage">Image would go here</div>
          <div className="blockText">
            <h1 className="blockHeading">Random Beer</h1>
            <p>
              Adipisicing consectetur sint ad duis eiusmod et aliquip sit. Elit
              reprehenderit veniam tempor do esse. Minim ex fugiat ipsum
              voluptate aute duis consectetur adipisicing. Voluptate duis
              pariatur id elit enim et. Non dolor culpa ex velit deserunt
              laboris.
            </p>
          </div>
        </div>
      </Link>
      <Link className="links" to="/new-beer">
        <div className="homepageBlock">
          <div className="blockImage">Image would go here</div>
          <div className="blockText">
            <h1 className="blockHeading">New Beer</h1>
            <p>
              Adipisicing consectetur sint ad duis eiusmod et aliquip sit. Elit
              reprehenderit veniam tempor do esse. Minim ex fugiat ipsum
              voluptate aute duis consectetur adipisicing. Voluptate duis
              pariatur id elit enim et. Non dolor culpa ex velit deserunt
              laboris.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
