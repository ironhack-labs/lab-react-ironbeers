import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css";
import Beers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import NewBeer from "../assets/new-beer.png";

export default function HomePage(props) {
  props.displayHeader(false);

  return (
    <div>
      <section className="Section">
        <img src={Beers} alt="beers" />
        <div className="Text">
          <NavLink className="Link" to="/beers">
            <h1>All Beers</h1>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            temporibus reprehenderit rem.
          </p>
        </div>
      </section>

      <section className="Section">
        <img src={RandomBeer} alt="random-beer" />
        <div className="Text">
          <NavLink className="Link" to="/random-beer">
            <h1>Random Beer</h1>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            temporibus reprehenderit rem.
          </p>
        </div>
      </section>

      <section className="Section">
        <img src={NewBeer} alt="new-beer" />
        <div className="Text">
          <NavLink className="Link" to="/new-beer">
            <h1>New Beer</h1>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            temporibus reprehenderit rem.
          </p>
        </div>
      </section>
    </div>
  );
}
