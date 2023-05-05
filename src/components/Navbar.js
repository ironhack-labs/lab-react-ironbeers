import {NavLink} from "react-router-dom"

function Navbar(){
    return(
        <nav>
            <NavLink to="/beers">All Bears</NavLink>
            <NavLink to="/random-beer">Random Beer</NavLink>
            <NavLink to="/new-beer">Add New Beer</NavLink>
        </nav>
    )
}

export default Navbar