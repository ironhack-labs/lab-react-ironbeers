import { Link } from "react-router-dom";
import beers from "../assets/beers.png"; 
import newBeer from "../assets/new-beer.png"; 
import RandomBeer from "../assets/random-beer.png"; 

function HomePage() {
  return (
    <div>
      <Link to="/beers"> beer <img src={beers}/></Link>
      <Link to="/random-beer"> random beer <img src={RandomBeer}/></Link>
      <Link to="/new-beer"> new beer <img src={newBeer}/></Link>
    </div>
  );
}

export default HomePage;
