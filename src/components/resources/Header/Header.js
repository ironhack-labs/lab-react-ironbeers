import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <Link to="/">
      <span className="icon-home"></span>
    </Link>
  </div>
);
export default Header;
