import React from "react";
import firstImages from "../assets/beers.png";
import secondImages from "../assets/new-beer.png";
import thirdImages from "../assets/random-beer.png";

function HomePage() {
  return (
    <main>
      <section className="all-beers">
        <div>
          <img src={firstImages} alt="all-beers" />
          <h1> All Beers</h1>
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
          <h1> All Beers</h1>
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
          <h1> All Beers</h1>
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
