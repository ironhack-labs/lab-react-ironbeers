import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div className="App">
      <h1>IT'S ALL ABOUT BEER ❤️</h1>

      <nav className="nav-container">
        <NavLink style={{ textDecoration: "none" }} to="/beers">
          <p> 🍻 ALL BEERS 🍻</p>
        </NavLink>
        <img src={require("../assets/beers.png")} alt="beer-img" />

        <NavLink style={{ textDecoration: "none" }} to="/random-beer">
          <p>🍻 RANDOM BEER 🍻</p>
        </NavLink>
        <img src={require("../assets/random-beer.png")} alt="beer-img" />

        <NavLink style={{ textDecoration: "none" }} to="/new-beer">
          <p>🍻 NEW BEER 🍻</p>
        </NavLink>
        <img src={require("../assets/new-beer.png")} alt="beer-img" />
      </nav>
    </div>
  );
}

export default Homepage;
