import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-info d-flex justify-content-start gap-4 text-light px-4">
      <Link to={'/'} className="nav-link">
        <img src="./src/assets/home-icon.png" />
      </Link>

      <Link to={'/beers'} className="nav-link fs-5">
        All Beers
      </Link>

      <Link to={'/random-beer'} className="nav-link fs-5">
        Random Beer
      </Link>

      <Link to={'/new-beer'} className="nav-link fs-5">
        New Beer
      </Link>
    </nav>
  );
}

export default Navbar;
