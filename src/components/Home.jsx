import React from "react";
import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function Home() {
  return (
    <div>
      <section className="sectionAllBeers">
        <img src={beers} alt="all beers" />
        <NavLink to="/beers">All Beers</NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis,
          earum dolor, necessitatibus neque, tempora ab ex maiores reprehenderit
          esse sunt aliquid iusto voluptatibus voluptatum eligendi est. Aperiam,
          libero quidem!
        </p>
      </section>

      <section className="sectionRandomBeer">
        <img src={randomBeer} alt="random beers" />
        <NavLink to="/randomBeer">Random Beer</NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis,
          earum dolor, necessitatibus neque, tempora ab ex maiores reprehenderit
          esse sunt aliquid iusto voluptatibus voluptatum eligendi est. Aperiam,
          libero quidem!
        </p>
      </section>

      <section className="sectionNewBeer">
        <img src={newBeer} alt="new beer" />
        <NavLink to="/newBeer">New Beer</NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis,
          earum dolor, necessitatibus neque, tempora ab ex maiores reprehenderit
          esse sunt aliquid iusto voluptatibus voluptatum eligendi est. Aperiam,
          libero quidem!
        </p>
      </section>
    </div>
  );
}

export default Home;
