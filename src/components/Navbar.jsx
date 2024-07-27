import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md py-4 px-6 flex items-center">
      <NavLink to="/" className="flex items-center">
        <img src={homeIcon} alt="Home" className="h-10" />
      </NavLink>

      <div className="ml-auto flex space-x-4">
        <NavLink
          to="/beers"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-yellow-300" : "text-slate-200"}`
          }
        >
          All Beers
        </NavLink>
        <NavLink
          to="/random-beer"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-yellow-300" : "text-slate-200"}`
          }
        >
          Random Beer
        </NavLink>
        <NavLink
          to="/new-beer"
          className={({ isActive }) =>
            `text-lg ${isActive ? "text-yellow-300" : "text-slate-200"}`
          }
        >
          New Beer
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

{
  /* <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-center">
            <NavLink
              to="/">
              <img src={homeIcon} alt="Home" className="h-8 mr-2" />
            </NavLink>
          </div>
        </nav> */
}
