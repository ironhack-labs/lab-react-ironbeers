import { Navbar, NavLink } from "react-bootstrap"

const NavBar = () => {
    return (
            <Navbar bg="dark" sticky="top">
                <NavLink to="/" >React IronBeers</NavLink>
                <NavLink to="/" >List</NavLink>
                <NavLink to="/" >Random Beer</NavLink>
                <NavLink to="/" >New Beer</NavLink>
            </Navbar>
    )
}

export default NavBar