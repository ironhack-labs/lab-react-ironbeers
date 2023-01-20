import { Link } from "react-router-dom";
import beerFoto1 from "../assets/beers.png";
import beerFoto2 from "../assets/random-beer.png";
import beerFoto3 from "../assets/new-beer.png";

const HomePage = () => {
  return (
    <div>
      <img src={beerFoto1} alt="a bar" />
      <br />
      <Link className="App-link" to="/beers">
        All Beers
      </Link>
      <br />
      <img src={beerFoto2} alt="beer on tap" />
      <br />
      <Link className="App-link" to="/random-beer">
        Random Beer
      </Link>
      <br />
      <img src={beerFoto3} alt="beery McBeerFace" />
      <br />
      <Link className="App-link" to="/new-beer">
        New Beer
      </Link>
    </div>
  );
};

export default HomePage;
