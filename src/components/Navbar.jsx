import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="Navbar">
      <Link to="/">
      <div className="home-icon-wrapper">
        {props.children}
      </div>
      </Link>
    </nav>
  );
}
export default Navbar;
