import header from "../assets/header.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={`/`}>
        <img src={header} />
      </Link>
    </div>
  );
}

export default Header;
