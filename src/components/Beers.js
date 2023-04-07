import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Beers = () => {
	const [beers, setBeers] = useState([])
	const [searchQuery, setSearchQuery] = useState('')

	useEffect(() => {
		const fetchBeers = async () => {
			const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
			const data = await response.json()
			setBeers(data)
		}
		fetchBeers()
	}, [])

	useEffect(() => {
		const fetchBeers = async () => {
			const url = searchQuery
				? `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
				: 'https://ih-beers-api2.herokuapp.com/beers'
			const response = await fetch(url)
			const data = await response.json()
			setBeers(data)
		}
		fetchBeers()
	}, [searchQuery])

	return (
		<div>
			<input
				type='text'
				placeholder='Search beers'
				value={searchQuery}
				onChange={(event) => setSearchQuery(event.target.value)}
				className='mt-6 text-xl p-2 w-1/3 focus:outline-sky-400'
			/>
			<div className='flex flex-wrap justify-evenly mt-4 '>
				{beers.map((beer) => (
					<div
						key={beer._id}
						className='flex m-4 w-full lg:w-1/2 xl:w-1/4 shadow-xl bg-white rounded-xl p-3'>
						<img
							src={beer.image_url}
							alt={beer.name}
							className='h-64 object-contain mx-auto'
						/>
						<div className='flex flex-col ml-4'>
							<h2 className='font-bold text-xl my-2'>{beer.name}</h2>
							<p className='my-2'>{beer.tagline}</p>
							<p className='my-2'>
								<strong>Contributed by:</strong> {beer.contributed_by}
							</p>
							<Link
								to={`/beers/${beer._id}`}
								className='mt-auto text-center bg-blue-500 hover:bg-blue-700 transition-all text-white font-bold py-2 px-4  w-40 ml-auto rounded'>
								Check details
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Beers
