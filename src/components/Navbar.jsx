import { Link } from "react-router-dom";


function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/">
      <img src="../src/assets/home-icon.png" alt="Home" width="30"/>
    </Link>
  </div>
</nav>
    )
}

export default Navbar;
