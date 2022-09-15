import React from "react";
import firstImages from "../assets/beers.png";
import secondImages from "../assets/new-beer.png";
import thirdImages from "../assets/random-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main>
      <section className="all-beers">
        <div>
          <img src={firstImages} alt="all-beers" />
          <Link to="/beers">
            <h1>All Beers</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            nihil harum distinctio eveniet laborum soluta placeat quod
            dignissimos, dolor deserunt minima tempora voluptate, sequi vero?
            Reiciendis dolore illo beatae eum?
          </p>
        </div>
      </section>

      <section className="random-beer">
        <div>
          <img src={thirdImages} alt="random-beer" />
          <Link to="/random-beer">
            <h1>Random Beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            nihil harum distinctio eveniet laborum soluta placeat quod
            dignissimos, dolor deserunt minima tempora voluptate, sequi vero?
            Reiciendis dolore illo beatae eum?
          </p>
        </div>
      </section>
      <section className="new-beer">
        <div>
          <img src={secondImages} alt="new-beer" />
          <Link to="/new-beer">
            <h1>New beer</h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            nihil harum distinctio eveniet laborum soluta placeat quod
            dignissimos, dolor deserunt minima tempora voluptate, sequi vero?
            Reiciendis dolore illo beatae eum?
          </p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
