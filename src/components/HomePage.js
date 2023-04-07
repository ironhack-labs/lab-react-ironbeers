import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className='flex flex-col items-center justify-center h-fit'>
			<div
				onClick={() => (window.location.href = '/beers')}
				className='mb-10 cursor-pointer'>
				<h1 className='text-4xl font-bold mb-2'>Beers</h1>
				<p className='text-lg mb-4'>Discover our collection of unique and flavorful beers.</p>
				<img
					src='../assets/beers.png'
					alt='beers'
				/>
			</div>
			<div
				onClick={() => (window.location.href = '/random-beer')}
				className='mb-10 cursor-pointer'>
				<h1 className='text-4xl font-bold mb-2'>Random Beer</h1>
				<p className='text-lg mb-4'>Get surprised by our selection of random beers.</p>
				<img
					src='../assets/random-beer.png'
					alt='random beer'
				/>
			</div>
			<div
				onClick={() => (window.location.href = '/new-beer')}
				className='cursor-pointer'>
				<h1 className='text-4xl font-bold mb-2'>New Beer</h1>
				<p className='text-lg mb-4'>Create your own beer and add it to our collection.</p>
				<img
					src='../assets/new-beer.png'
					alt='new beer'
				/>
			</div>
		</div>
	)
}

export default HomePage
