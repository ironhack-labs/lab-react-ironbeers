import { Link } from 'react-router-dom';
import homeIcon from '../assets/home.png';

const Header = () => {
  return (
    <div className="has-background-info p-3 is-flex is-justify-content-center">
      <Link to="/">
        <img src={homeIcon} style={{ maxHeight: 28 }} alt="Return to home" />
      </Link>
    </div>
  );
};

export default Header;
