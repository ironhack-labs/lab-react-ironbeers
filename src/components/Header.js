import { Link } from "react-router-dom";
import beerIcon from "../assets/beer-icon.png";

const Header = () => {
  return (
    <header className="Header sticky p-4">
      <Link to="/">
        <img
          className=" w-24 h-auto mx-auto"
          src={beerIcon}
          alt="A full glass of beer."
        />
      </Link>
    </header>
  );
};

export default Header;
