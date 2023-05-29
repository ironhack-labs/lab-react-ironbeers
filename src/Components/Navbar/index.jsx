import { NavLink } from "react-router-dom";
 
function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      
      <NavLink to="/Pages/AllBeers">
        <button>All Beers</button>
      </NavLink>

      <NavLink to="/Pages/NewBeer">
        <button>Add Beer</button>
      </NavLink>

      <NavLink to="/Pages/RandomBeer">
        <button>Random Beer</button>
      </NavLink>
    </nav>
  );
}
 
export default Navbar;