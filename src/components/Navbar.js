import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">IronBeers with React</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {location.pathname !== "/" && (
              <li className="nav-item mx-4">
                <NavLink className="NavLinksInNavBar" to="/">
                  Home
                </NavLink>
              </li>
            )}
            <li className="nav-item mx-4">
              <NavLink className="NavLinksInNavBar" to="/all-beers">
                All Beers
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink className="NavLinksInNavBar" to="/random">
                Random Beer
              </NavLink>
            </li>
            <li className="nav-item mx-4">
              <NavLink className="NavLinksInNavBar" to="/new-beer">
                New Beer
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
