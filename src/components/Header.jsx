import '../components/Header.css';
import { Link } from 'react-router-dom/dist';

function Header() {
  return (
    <div>
      <Link to="/">
        <i className="fa-solid fa-house fa-2xl home-icon"></i>
      </Link>
    </div>
  );
}

export default Header;
