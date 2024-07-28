import { Link } from 'react-router-dom';
import logo from '../assets/home-icon.png';
function Navbar() {
    return (
      <nav className="navbar">
        <Link to="/">
        <button style={{ background: 'blue', color: 'white' }} className="navbar-button">
          <img src={logo} alt="IronBeers Logo" style={{ width: '50px', height: 'auto' }} />
        </button>
        </Link>
        <Link to="/beers"><button className="navbar-button">Beers</button></Link>
        <Link to="/random-beer"><button className="navbar-button">Random Beer</button></Link>
        <Link to="/new-beer"><button className="navbar-button">New Beer</button></Link> 
      </nav>
  );
}

export default Navbar;
