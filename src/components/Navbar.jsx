import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div>
            <Link to='/'><p className='nav-container'>Home</p></Link>
        </div>
    )
}

export default Navbar;
