import { Link, useLocation } from 'react-router-dom';
import headerImage from '../assets/home.png';

function Header() {
  const spot = useLocation();

  
  if (spot.pathname === '/') {
    return null;
  }

  return (
    <header>
      <Link to="/">
        <img src={headerImage} alt="Header" />
      </Link>
    </header>
  );
}

export default Header;