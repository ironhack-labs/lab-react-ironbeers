import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import '../App.css'

function HomePage() {
  return (
    <div className="homepage">
      <Link to="/beers">
        <img src={beers} alt="beers-img" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum
          turpis, malesuada vel dolor a, gravida hendrerit mauris. Donec
          accumsan facilisis elementum. Aliquam rhoncus justo lectus, et tempus
          tortor sollicitudin a.
        </p>
      </Link>
      <Link to="/randombeer">
        <img src={randomBeer} alt="beers-img" />
        <h1>Random Beers</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum
          turpis, malesuada vel dolor a, gravida hendrerit mauris. Donec
          accumsan facilisis elementum. Aliquam rhoncus justo lectus, et tempus
          tortor sollicitudin a.
        </p>
      </Link>
      <Link to="/newbeer">
        <img src={newBeer} alt="beers-img" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum
          turpis, malesuada vel dolor a, gravida hendrerit mauris. Donec
          accumsan facilisis elementum. Aliquam rhoncus justo lectus, et tempus
          tortor sollicitudin a.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
