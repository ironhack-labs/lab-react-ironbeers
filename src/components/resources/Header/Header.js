import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <div className="header">
    <Link to="/">
          <h1 className="icon-home">&#8962;
</h1>
    </Link>
  </div>
);
export default Header;
