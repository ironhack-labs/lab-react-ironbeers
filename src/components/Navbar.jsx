import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-primary border-bottom border-body" data-bs-theme="dark">
        <div className="container">
            <Link to={'/'} className="navbar-brand"><i className="fa fa-home" aria-hidden="true"/></Link>
        </div>
    </nav>
  )
}

export default Navbar