import { NavLink } from "react-router-dom";

function Navbar() {

    return(
        <nav>
            <NavLink className={({isActive}) => (isActive ? 'selected' : '')} to="/">Home</NavLink>
        </nav>
    )
}

export default Navbar;
