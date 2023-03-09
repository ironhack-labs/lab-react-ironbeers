import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                {/* Link is used in place of <a></a> tag
            to is the attribute for the route the link will take you to */}
                <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
                    Home
                </NavLink>

                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "selected" : ""}
                >
                    About
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) => isActive ? "selected" : ""}
                >
                    Projects
                </NavLink>

                {/* <NavLink to='/'>Homepage</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/projects'>Projects</NavLink> */}
            </ul>
        </nav>
    );
}

export default Navbar;