import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/beers">All Beers</NavLink>
            <NavLink to="/beers/create">Add New Beer</NavLink>
            <NavLink to="/beers/random">Show Random Beer</NavLink>
        </>
        )
}


export default Navbar