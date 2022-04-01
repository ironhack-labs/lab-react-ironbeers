import { React } from "react";
import { Link } from "react-router-dom";
import home from "../../assets/home-img.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="container">
          <Link to="/">
            <img src={home} className="home-icon" alt="home icon" />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

<div className="navbar">
  <div>
    <Link to="/">
      <img src={home} className="home-icon" alt="home icon" />
    </Link>
  </div>
</div>;
