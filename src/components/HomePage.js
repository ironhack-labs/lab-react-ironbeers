import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="HomePage">
      <div>
        <img src={beers} alt="all-beers" />
        <h2>
          <Link to="/beers"> All Beers </Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          finibus enim dolor, quis scelerisque ante sodales nec. Nullam ac
          sapien eu neque porttitor aliquet.
        </p>
      </div>
      <div>
        <img src={randomBeer} alt="random-beer" />
        <h2>
          <Link to="/random-beer"> Random Beer </Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          finibus enim dolor, quis scelerisque ante sodales nec. Nullam ac
          sapien eu neque porttitor aliquet.
        </p>
      </div>
      <div>
        <img src={newBeer} alt="new-beer" />
        <h2>
          <Link to="/new-beer"> New Beer </Link>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          finibus enim dolor, quis scelerisque ante sodales nec. Nullam ac
          sapien eu neque porttitor aliquet.
          ante.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
