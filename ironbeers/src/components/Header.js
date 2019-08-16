import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<header>
				<Link className='btn btn-sm btn-dark homeclass' to={'/'}>
					Home
				</Link>
			</header>
		</>
	)
}

export default HomePage
