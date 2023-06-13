import { NavLink } from 'react-router-dom'

function Navbar() {
	return (
		<header>
			<nav>
				<NavLink to="/" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')}>
					Home
				</NavLink>
			</nav>
		</header>
	)
}

export default Navbar
