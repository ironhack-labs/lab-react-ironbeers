import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  return (
    <>
      <h1> Welcome to LAB | React IronBeers</h1>

      {/* menu all beers */}
      <div className="menu">
        <div>
          <img src="./images/beers.png " alt="beers" />
        </div>

        <div className="details">
          <Link to={`/beers`} className="main">
            All Beers
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>

      {/* menu Random beers */}
      <div className="menu">
        <div>
          <img src="./images/random-beer.png " alt="random-beers" />
        </div>
        <div className="details">
          <Link to={`/random-beer`} className=" main">
            Random Beer
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>

      {/* menu new beers */}
      <div className="menu">
        <div>
          <img src="./images/new-beer.png " alt="new-beers" />
        </div>
        <div className="details">
          <Link to={`/new-beer`} className="main">
            New Beer
          </Link>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </>
  );
}
