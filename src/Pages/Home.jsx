import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
      <nav>
      <NavLink to="/beers">
        <button>All Beers</button>
      </NavLink>
      <NavLink to="/random-beer">
        <button>Random Beer</button>
      </NavLink>
      <NavLink to="/new-beer">
        <button>New Beer</button>
      </NavLink>
    </nav>
    </div>
  );
}

export default Home;
