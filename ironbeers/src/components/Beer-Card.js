import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const BeerCard = ({ image, name, tagline, contributed_by, _id }) => {
	return (
		<>
			<Header />
			<div className='col-md-3'>
				<article className='coaster-card'>
					<img src={image} alt={name} />
					<h4>{name}</h4>
					<p>{tagline}</p>
					<p>{contributed_by}</p>
					<hr />
					<Link className='btn btn-sm btn-dark' to={`/${_id}`}>
						Check details
					</Link>
				</article>
			</div>
		</>
	)
}

export default BeerCard
