import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="mainpage">
      <Link to="/beers">
        <div>
          <img src="./images/beers.png" alt="" />
        </div>
        <div className="mainpage-item">
          <h4>All Beers</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam ab
            veritatis accusamus debitis enim mollitia dolorem odit ea culpa
            aspernatur.
          </p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div>
          <img src="./images/random-beer.png" alt="" />
        </div>
        <div className="mainpage-item">
          <h4>Random Beer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            recusandae nulla error omnis officia ut et tempora. Similique,
            tenetur saepe!
          </p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div>
          <img src="./images/new-beer.png" alt="" />
        </div>
        <div className="mainpage-item">
          <h4>New Beer</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus delectus inventore molestiae odit cum tempora corporis
            totam autem doloremque!
          </p>
        </div>
      </Link>
    </div>
  );
}
