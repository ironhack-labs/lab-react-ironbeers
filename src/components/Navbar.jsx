import Logo from "../assets/home-icon.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // Get current location

  return (
    <nav
      className="navbar sticky-top navbar-expand-sm bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-underline me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-sm-2">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>

            <li className="nav-item ms-sm-2">
              <Link
                className={`nav-link ${location.pathname === "/beers" ? "active" : ""}`}
                aria-current="page"
                to={"/beers"}
              >
                Beers
              </Link>
            </li>

            <li className="nav-item ms-sm-2">
              <Link
                className={`nav-link ${location.pathname === "/new-beer" ? "active" : ""}`}
                aria-current="page"
                to={"/new-beer"}
              >
                Add Beer
              </Link>
            </li>

            <li className="nav-item ms-sm-2">
              <Link
                className={`nav-link ${location.pathname === "/random-beer" ? "active" : ""}`}
                aria-current="page"
                to={"/random-beer"}
              >
                Random Beer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
