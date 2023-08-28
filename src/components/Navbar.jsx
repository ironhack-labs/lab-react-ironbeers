import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="mb-3">
           <nav className="navbar bg-primary justify-content-around fixed-top" data-bs-theme="dark">
            <Link className="text-white" to="/">HOME</Link>
            <Link className="text-white" to="/beers">BEERS</Link>
            <Link className="text-white" to="/random-beer">RANDOM BEER</Link>
            <Link className="text-white" to="/new-beer">ADD A BEER</Link>
            </nav> 
        </div>
    )    
}

export default Navbar;
