import { Link } from "react-router-dom";
import homeIcon from "../assets/home-icon.png";

function Header() {
    return (
      <div className="header-box" id="header">
        <Link to="/">
            <img src={homeIcon} alt="go to home page"/>
        </Link>
     
      </div>
    );
  }
  
  export default Header;