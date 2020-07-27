import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="card-deck">
      <div className="card">
        <img
          className="card-img-top"
          src="images/beers.jpeg"
          alt="List Beers"
        />
        <div className="card-body">
          <h5 className="card-title">All Beers</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p>
        </div>
        <Link to="/beers" className="stretched-link" />
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="images/randomBeer.jpeg"
          alt="Random Beer"
        />
        <div className="card-body">
          <h5 className="card-title">Random Beer</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
        </div>
        <Link to="/random-beer" className="stretched-link" />
      </div>
      <div className="card">
        <img
          className="card-img-top"
          src="images/newBeer.jpeg"
          alt="New Beer"
        />
        <div className="card-body">
          <h5 className="card-title">New Beer</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <Link to="/new-beer" className="stretched-link" />
      </div>
    </div>
  );
}

export default Home;
