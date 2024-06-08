import { Link } from "react-router-dom";
import beers from "./../assets/beers.png";
import random from "./../assets/random-beer.png"
import newBeer from "./../assets/new-beer.png" 
import Card from "../components/Card/Card";
function HomePage() {
  return (
    <div className="container mt-5">
      <Link to="/beers">
        <Card img={beers} title="All Beers"/>
      </Link>
      <Link to="/random-beer">
        <Card img={random} title="Random Beer"/>
      </Link>
      <Link to="/new-beer">
        <Card img={newBeer} title="Add new beer"/>
      </Link>
    </div>
  );
}

export default HomePage;
