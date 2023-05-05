import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar">
			<NavLink to='/'>HOME</NavLink>
		</nav>
	);
}

export default Navbar;
