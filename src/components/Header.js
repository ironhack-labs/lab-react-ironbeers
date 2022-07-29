import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default Header