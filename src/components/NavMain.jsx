import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMain = () => {
	return (
		<div>
			<nav>
				<NavLink exact to="/">
					<span role="img" aria-label="beer emoji">🍻</span>
				</NavLink>
			</nav>
		</div>
	)
}

export default NavMain
