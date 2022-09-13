import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      <div className="allBeers">
        <img src={beers} alt="beers" />
        <Link to="Beers">
          <h2>All Beers</h2>{" "}
        </Link>
        <p>
          Lorem ipsum dolor sit amet. Ea molestias repellendus et sunt iusto aut
          nihil suscipit quo aliquam laborum ut expedita sint eum unde nisi. Non
        </p>
      </div>

      <div className="randomBeers">
        <img src={randomBeer} alt="randomBeer" />
        <Link to="Random-Beer">
          <h2>Random Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet. Ea molestias repellendus et sunt iusto aut
          nihil suscipit quo aliquam laborum ut expedita sint eum unde nisi. Non
        </p>
      </div>

      <div className="newBeer">
        <img src={newBeer} alt="newBeer" />
        <Link to="New-Beer">
          <h2>New Beer</h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet. Ea molestias repellendus et sunt iusto aut
          nihil suscipit quo aliquam laborum ut expedita sint eum unde nisi. Non
        </p>
      </div>
    </div>
  );
}

export default Home;
