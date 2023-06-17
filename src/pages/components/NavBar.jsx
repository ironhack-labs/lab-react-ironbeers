import { Link } from "react-router-dom";
import icon from "../../assets/white-home-icon-png-21.jpg"

function NavBar() {
  return (
    <div>
        <header>
            <Link to={"/"}><img className="homeicon" alt="icon" src={icon} /></Link>
        </header>{" "}
    </div>
  )
}

export default NavBar
