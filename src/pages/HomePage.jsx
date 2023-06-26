import { NavLink } from "react-router-dom";
import beers from "../assets/beers.jpg";
import randomBeer from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";

function HomePage() {
  return (
    <div className="homepage">
      <div className="page">
        <NavLink to="/beers">
          <img src={beers} alt="" />
          <div>
            <h2>All Beers</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              vehicula nisi. Vivamus sit amet tempus velit. Vestibulum sed
              egestas turpis. Pellentesque bibendum libero quis facilisis
              pulvinar. Fusce augue felis.
            </p>
          </div>
        </NavLink>
      </div>

      <div className="page">
        <NavLink to="/random-beer">
          <img src={randomBeer} alt="" />
          <div>
            <h2>Random Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              vehicula nisi. Vivamus sit amet tempus velit. Vestibulum sed
              egestas turpis. Pellentesque bibendum libero quis facilisis
              pulvinar. Fusce augue felis.
            </p>
          </div>
        </NavLink>
      </div>

      <div className="page">
        <NavLink to="/new-beer">
          <img src={newBeer} alt="beers" />
          <div>
            <h2>New Beer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id
              vehicula nisi. Vivamus sit amet tempus velit. Vestibulum sed
              egestas turpis. Pellentesque bibendum libero quis facilisis
              pulvinar. Fusce augue felis.
            </p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default HomePage;
