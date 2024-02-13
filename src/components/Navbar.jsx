import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <nav style={{ backgroundColor: "DeepSkyBlue", height: "4rem" }}>
            <NavLink to="/">🏠</NavLink>
        </nav>
    );
}

export default Navbar;
