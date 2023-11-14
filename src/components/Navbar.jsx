import { Link, NavLink } from "react-router-dom";
function Navbar() {
    return(
        <NavLink className={'Navbar'}>
            <Link to="/">Home</Link>
        </NavLink>

    )
}

export default Navbar;
