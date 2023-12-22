import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img
          className="homepage-icon"
          src="https://www.svgrepo.com/show/75770/homepage.svg"
        />
      </Link>
    </div>
  );
}

export default Navbar;