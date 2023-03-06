import allBeers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="flex-c">
        <div className="flex-c">
          <img src={allBeers} />
          <Link to="/beers">
            <h2 className="left margined">Get all Beers</h2>
          </Link>
          <h3 className="left margined">
            Get the list of all the Beers from our API
          </h3>
        </div>

        <div className="flex-c">
          <img src={newBeer} />
          <Link to="/create-beer">
            <h2 className="left margined">Create New Beer</h2>
          </Link>
          <h3 className="left margined">Description</h3>
        </div>

        <div className="flex-c">
          <img src={randomBeer} />
          <Link to="/random-beer">
            <h2 className="left margined">Get a Random Beer</h2>
          </Link>
          <h3 className="left margined">Description</h3>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
