import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <nav>
      <div>
        <Link to="/beers">
          <img src={beersImg} alt="beers" /> <br />
          All Beers
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
          numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
          alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
          corporis id.
        </p>
      </div>

      <div>
        <Link to="/random-beer">
          <img src={randomBeer} alt="beers" /> <br />
          Random Beer
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
          numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
          alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
          corporis id.
        </p>
      </div>

      <div>
        <Link to="/new-beer">
          <img src={newBeer} alt="beers" /> <br />
          New Beer
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
          numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
          alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
          corporis id.
        </p>
      </div>
    </nav>
  );
}

export default HomePage;
