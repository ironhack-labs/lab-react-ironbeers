import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<nav>
			<Link to='/'>
				<i className='fa fa-home' />
			</Link>
		</nav>
	)
}

export default Header
