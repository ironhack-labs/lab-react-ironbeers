import { Link } from "react-router-dom";
import beerImg from "../assets/beers.png"
import RandomImg from "../assets/random-beer.png";
import NewBeerImg from "../assets/new-beer.png";
function HomePage() {
  return (
    <>
      <h1>HOME PAGE</h1>
      <Link to="/beers">
        <div>
          <img className="homeimg" src={beerImg} alt="beers" />
          <h1>Beers</h1>
        </div>
      </Link>
      <Link to="/random-beer">
        <div>
          <img className="homeimg" src={RandomImg} alt="random-beer"/>
          <h1>Random Beer</h1>
        </div>
      </Link>
      <Link to="/new-beer">
        <div>
          <img className="homeimg" src={NewBeerImg} alt="new-beer" />
          <h1>New Beer</h1>
        </div>
      </Link>
    </>
  );
}
export default HomePage;
