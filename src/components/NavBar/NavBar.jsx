import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
                <li>
                    <NavLink className="navbar-brand" to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="navbar-brand" to="beers">All Beers</NavLink>
                </li>

            </div>
        </nav>
    );
}

export default Navbar;