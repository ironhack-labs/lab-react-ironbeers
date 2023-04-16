import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center">
      <section className="mt-3 mb-5">
        <Link to={"/beers"} className="text-decoration-none text-dark">
          <img src="./src/assets/" alt="beers" />
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar mi metus, molestie commodo libero sollicitudin non. Duis et
            nisi at metus condimentum finibus. Pellentesque sed fringilla dui.
            Nunc ullamcorper tellus id odio pretium, eu maximus eros tristique.
            Proin ut vulputate tellus, vel egestas ipsum!
          </p>
        </Link>
      </section>

      <section className="mb-5">
        <Link to={"/random-beer"} className="text-decoration-none text-dark">
          <img src="./src/assets/random-beer.png" alt="random beer" />
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar mi metus, molestie commodo libero sollicitudin non. Duis et
            nisi at metus condimentum finibus. Pellentesque sed fringilla dui.
            Nunc ullamcorper tellus id odio pretium, eu maximus eros tristique.
            Proin ut vulputate tellus, vel egestas ipsum!
          </p>
        </Link>
      </section>

      <section className="mb-5">
        <Link to={"/new-beer"} className="text-decoration-none text-dark">
          <img src="./src/assets/new-beer.png" alt="new beer" />
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar mi metus, molestie commodo libero sollicitudin non. Duis et
            nisi at metus condimentum finibus. Pellentesque sed fringilla dui.
            Nunc ullamcorper tellus id odio pretium, eu maximus eros tristique.
            Proin ut vulputate tellus, vel egestas ipsum!
          </p>
        </Link>
      </section>
    </div>
  );
}

export default Home;
