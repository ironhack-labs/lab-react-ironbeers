import { Link } from "react-router-dom";
import homeimg from "../assets/homeimg.png";

function Header() {
    return (
      <div className="headers-box">
        <Link to="/">
            <img src={homeimg} alt="go to home page" width="100%"/>
        </Link>

      </div>
    );
  }

  export default Header;