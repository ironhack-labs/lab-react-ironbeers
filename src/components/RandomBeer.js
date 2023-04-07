import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const RandomBeer = () => {
	const { id } = useParams()
	const [beer, setBeer] = useState(null)

	useEffect(() => {
		const fetchBeer = async () => {
			const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
			const data = await response.json()
			setBeer(data)
		}
		fetchBeer()
	}, [])

	if (!beer) {
		return <div>Loading...</div>
	}

	return (
		<div className='flex flex-col mt-20  items-center m-8 min-h-screen'>
			<img
				src={beer.image_url}
				alt={beer.name}
				className='h-48 object-contain mx-auto'
			/>
			<div className='flex flex-col items-center mt-4'>
				<h2 className='font-bold text-3xl'>{beer.name}</h2>
				<p className='my-2'>{beer.tagline}</p>
				<p className='my-2'>
					<strong>First brewed:</strong> {beer.first_brewed}
				</p>
				<p className='my-2'>
					<strong>Attenuation level:</strong> {beer.attenuation_level}
				</p>
				<p className='my-2 w-2/3'>{beer.description}</p>
				<p className='my-2'>
					<strong>Contributed by:</strong> {beer.contributed_by}
				</p>
				<Link
					to='/beers'
					className='mt-8 text-center bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4 rounded'>
					Back to Beers
				</Link>
			</div>
		</div>
	)
}

export default RandomBeer
