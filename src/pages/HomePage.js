import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import newBeer from "../assets/new-beer.png"

function HomePage() {
  return (
    <div>
      <div>
        <img src={beersImg} alt="beers" /> <br />
        <Link to="/beers">All Beers</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
          numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
          alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
          corporis id.
        </p>
      </div>

      <div>
        <img src={randomBeer} alt="beers" /> <br />
        <Link to="/random-beer">Random Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
          numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
          alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
          corporis id.
        </p>
      </div>

      <div>
        <img src={newBeer} alt="beers" /> <br />
        <Link to="/new-beers">New Beer</Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem
          numquam molestiae odit, atque quaerat dolor quisquam eligendi voluptas
          alias quo deleniti, accusantium, quis commodi! Eveniet eligendi alias
          corporis id.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
