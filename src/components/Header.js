import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to='/'>
      <img src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' alt='Home' className="logo"/>
      </Link>
    </div>
  )
}

export default Header;
