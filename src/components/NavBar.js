import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return(
        <nav className="NavBar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">Beer List</NavLink>
            <NavLink to="/random">Random Beer</NavLink>
            <NavLink to="/new">Add Beer</NavLink>
            <NavLink to="/search?q={query}">Find Beer</NavLink>
        </nav>
    );
}

export default NavBar;