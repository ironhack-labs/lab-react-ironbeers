import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className='navbar'>
            <NavLink className={NavLink} to="/">Home</NavLink>
        </nav>
    )
}
export default NavBar;