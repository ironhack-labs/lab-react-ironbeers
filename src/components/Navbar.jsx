import {Link} from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
          <div>
            <Link to="/">Home</Link>
          </div>
        </nav>
      );

}

export default Navbar;
