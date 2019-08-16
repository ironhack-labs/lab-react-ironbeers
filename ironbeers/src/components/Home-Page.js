import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<>
			<Link className='btn btn-sm btn-dark' to={'/beers'}>
				All Beers
			</Link>
			<Link className='btn btn-sm btn-dark' to={'/random-beer'}>
				Random Beer
			</Link>
			<Link className='btn btn-sm btn-dark' to={'/new-beer'}>
				New Beer
			</Link>
		</>
	)
}

export default HomePage
