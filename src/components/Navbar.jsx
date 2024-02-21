
import homeImg from "../assets/home-icon.png"
import { Link } from "react-router-dom"; 
function Navbar() {
    return (
        <>
        <Link to="/">
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
          <img 
            src={homeImg}
            alt="home"
            
          />
          </div>
        </nav>
      </Link>
      </>
    )
}


export default Navbar;
