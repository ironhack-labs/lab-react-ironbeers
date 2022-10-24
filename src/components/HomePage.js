import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <section className="HomePage">
      <div>
        <img src={beers} alt="All Beers" />
        <h1>
          <NavLink to="/beers">All Beers</NavLink>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nesciunt eligendi, impedit, reprehenderit consectetur veritatis
          facilis saepe molestias et tenetur quam illo optio aliquid beatae
          assumenda, iusto facere fuga repellat.
        </p>
      </div>
      <div>
        <img src={randomBeer} alt="Random Beers" />
        <h1>
          <NavLink to="/random-beer">Random Beers</NavLink>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nesciunt eligendi, impedit, reprehenderit consectetur veritatis
          facilis saepe molestias et tenetur quam illo optio aliquid beatae
          assumenda, iusto facere fuga repellat.
        </p>
      </div>
      <div>
        <img src={newBeer} alt="New Beers" />
        <h1>
          <NavLink to="/new-beer">New Beers</NavLink>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          nesciunt eligendi, impedit, reprehenderit consectetur veritatis
          facilis saepe molestias et tenetur quam illo optio aliquid beatae
          assumenda, iusto facere fuga repellat.
        </p>
      </div>
    </section>
  );
}
export default HomePage;
