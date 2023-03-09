import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                {/* Link is used in place of <a></a> tag
            to is the attribute for the route the link will take you to */}
                <Link to="/" className={({ isActive }) => isActive ? "selected" : ""}>
                <img
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          alt=""
         />
                </Link>
            
            </ul>
        </nav>
    );
}

export default Navbar;

