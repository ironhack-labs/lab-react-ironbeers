import { Link, NavLink } from "react-router-dom";

function HomePage() {
    return (
      <div className="HomePage">
        <NavLink to="/beers">
          <img src="src/assets/beers.png" />
          <h1>All Beers</h1>
        </NavLink>
        <NavLink to="/random-beer">
          <img src="src/assets/random-beer.png" />
          <h1>Random Beer</h1>
        </NavLink>
        <NavLink to="/new-beer">
          <img src="src/assets/new-beer.png" />
          <h1>New Beer</h1>
        </NavLink>
      </div>
    );
}

export default HomePage;
