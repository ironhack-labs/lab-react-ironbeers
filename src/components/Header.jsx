import { Link } from "react-router-dom";
import homeIcon from '../assets/house-solid.svg'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img className="header-img" src={homeIcon} alt=""  />
      </Link>
    </header>
  );
};

export default Header;
