import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
        <Link to={'/'}><h3>🏠</h3></Link>
    </nav>
  )
}

export default Navbar;