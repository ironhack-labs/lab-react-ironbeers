import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="bloc">
        <NavLink to="/beers">
          <img src="/images/beers.png" alt="All beers" />
        </NavLink>
        <h2>All beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          mollitia ab tempora debitis beatae esse nesciunt enim accusamus,
          numquam asperiores laudantium quod impedit ipsam explicabo temporibus
          possimus, maiores inventore dignissimos.
        </p>
      </div>
      <div className="bloc">
        <NavLink to="/random-beer">
          <img src="/images/random-beer.png" alt="Random beer" />
        </NavLink>
        <h2>Random beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          mollitia ab tempora debitis beatae esse nesciunt enim accusamus,
          numquam asperiores laudantium quod impedit ipsam explicabo temporibus
          possimus, maiores inventore dignissimos.
        </p>
      </div>
      <div className="bloc">
        <NavLink to="/new-beer">
          <img src="/images/new-beer.png" alt="New beer" />
        </NavLink>
        <h2>New beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          mollitia ab tempora debitis beatae esse nesciunt enim accusamus,
          numquam asperiores laudantium quod impedit ipsam explicabo temporibus
          possimus, maiores inventore dignissimos.
        </p>
      </div>
    </div>
  );
}
