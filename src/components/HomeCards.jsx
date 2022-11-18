import { NavLink } from "react-router-dom";
import Beers from "../assets/beers.png";
import NewBeer from "../assets/new-beer.png";
import RandomBeer from "../assets/random-beer.png";

function Navbar() {
  return (
    <div className="cards-section">
      <div className="home-card">
        <NavLink to="/beers">
          <img src={Beers} alt="Beers" />
        </NavLink>
        <div className="home-card-text">
          <h1>All Beers</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            commodi, dolore velit minus repellat nesciunt dolores ut illo eum
            necessitatibus sunt cum error sequi vel quae, qui quisquam dolorem
            quam.
          </p>
          <NavLink to="/beers">
            <button className="button-custom">Leeeeeeet's Drink</button>
          </NavLink>
        </div>
      </div>
      <div className="home-card">
        <NavLink to="/new-beer">
          <img src={NewBeer} alt="Beers" />
        </NavLink>
        <div className="home-card-text">
          <h1>New Beer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            commodi, dolore velit minus repellat nesciunt dolores ut illo eum
            necessitatibus sunt cum error sequi vel quae, qui quisquam dolorem
            quam.
          </p>
          <NavLink to="/new-beer">
            <button className="button-custom">Leeeeeeet's Drink</button>
          </NavLink>
        </div>
      </div>
      <div className="home-card">
        <NavLink to="/random-beer">
          <img src={RandomBeer} alt="Beers" />
        </NavLink>
        <div className="home-card-text">
          <h1>Random Beer</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            commodi, dolore velit minus repellat nesciunt dolores ut illo eum
            necessitatibus sunt cum error sequi vel quae, qui quisquam dolorem
            quam.
          </p>
          <NavLink to="/random-beer">
            <button className="button-custom">Leeeeeeet's Drink</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
