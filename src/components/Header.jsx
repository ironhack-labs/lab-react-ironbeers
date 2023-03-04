import { Link } from "react-router-dom";

import home from "../assets/home.png";

function Header() {
  return (
    <div>
      <Link to="/">
        <img id="home-banner" src={home} alt="Home banner." />
      </Link>
    </div>
  );
}

export default Header;
