import { Link } from "react-router-dom";
import headerImg from "../assets/header.png";
function Header() {
  return (
    <Link to={"/"}>
      <img src={headerImg} alt="headerImg" />
    </Link>
  );
}

export default Header;
