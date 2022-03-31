import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid justify-content-center">
          <Link className="navbar-brand" to="/">
            <i className="fa-solid fa-house fs-1" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
