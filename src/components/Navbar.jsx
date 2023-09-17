import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link className="navbar-brand" to="/">
            <img src='./assets/home-icon.png' alt="HomePage" />
            </Link>
          </div>
        </nav>
      );

}

export default Navbar;