import { NavLink } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <nav>
        <NavLink to="/beers">Beers</NavLink>
        <NavLink to="/random-beer">Random Beer</NavLink>
        <NavLink to="/new-beer">New Beer</NavLink>
      </nav>
    </div>
  );
}

export default HomePage;
