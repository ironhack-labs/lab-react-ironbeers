import React from "react";
import { Link } from "react-router-dom";

//Import images
import beer from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <main>
      <article className="homepage-article">
        <img className="homepage-pics" src={beer} alt="all-beers" />
        <div className="homepage-article-text">
          <Link className="a-link" to="/beers">
            <h2>All Beers</h2>
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            deleniti rerum magnam tenetur! Cum architecto non labore itaque
            explicabo maiores, deserunt velit autem provident magnam. Non ipsa
            ut saepe dolorem.
          </p>
        </div>
      </article>
      <article className="homepage-article">
        <img className="homepage-pics" src={randomBeer} alt="random-beer" />
        <div className="homepage-article-text">
          <Link className="a-link" to="random-beer">
            <h2>Random Beer</h2>
          </Link>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            consequatur ex at, assumenda neque amet praesentium maxime voluptas
            magni expedita corrupti deleniti non hic aut fuga molestias sint
            magnam eos.
          </p>
        </div>
      </article>
      <article className="homepage-article">
        <img className="homepage-pics" src={newBeer} alt="new-beer" />
        <div className="homepage-article-text">
        <Link className="a-link" to="new-beer">
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quam,
          facere tempora veritatis blanditiis iure perferendis odit dolorum ipsa
          praesentium numquam. Ea doloribus reprehenderit ullam blanditiis
          excepturi et ducimus libero!
        </p>
        </div>
      </article>
    </main>
  );
}

export default HomePage;
