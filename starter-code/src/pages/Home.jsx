import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <section className="section">
        <Link to="/beers">
          <img src="/img/beers.png" alt="beers" />
          <h1>Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis exercitationem, error iure consectetur velit, ex nulla
            placeat optio obcaecati ratione, numquam modi architecto accusamus.
            Recusandae, dolorum? Quibusdam perferendis necessitatibus repellat.
          </p>
        </Link>
      </section>
      <section className="section">
        <Link to="/random-beers">
          <img src="/img/random-beer.png" alt="beers" />
          <h1>Random Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis exercitationem, error iure consectetur velit, ex nulla
            placeat optio obcaecati ratione, numquam modi architecto accusamus.
            Recusandae, dolorum? Quibusdam perferendis necessitatibus repellat.
          </p>
        </Link>
      </section>
      <section className="section">
        <Link to="new-beers">
          <img src="/img/new-beer.png" alt="beers" />
          <h1>New Beers</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis exercitationem, error iure consectetur velit, ex nulla
            placeat optio obcaecati ratione, numquam modi architecto accusamus.
            Recusandae, dolorum? Quibusdam perferendis necessitatibus repellat.
          </p>
        </Link>
      </section>
    </div>
  );
}

export default Home;
