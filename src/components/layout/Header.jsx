import { Link } from "react-router-dom";
import home from "../../assets/home.svg";
import "./layout.css";

const Header = () => {
  return (
    <nav className="nav-container">
      <Link to={"/"}>
        <img src={home} alt="home-icon" />
      </Link>
    </nav>
  );
};

export default Header;
