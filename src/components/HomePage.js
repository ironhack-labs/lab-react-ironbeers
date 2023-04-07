import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
	return (
		<div className='flex justify-evenly mt-10 h-screen'>
			<div
				onClick={() => (window.location.href = '/beers')}
				className='mb-2 cursor-pointer w-1/4 hover:text-sky-500 transition-all '>
				<h1 className='text-4xl font-medium mb-2'>Beers</h1>
				<p className='text-lg mb-4 '>Discover our collection of unique and flavorful beers.</p>
				<img
					className='rounded-xl'
					src='../assets/beers.png'
					alt='beers'
				/>
			</div>
			<div
				onClick={() => (window.location.href = '/random-beer')}
				className='mb-2 cursor-pointer w-1/4 hover:text-sky-500 transition-all'>
				<h1 className='text-4xl font-medium mb-2'>Random Beer</h1>
				<p className='text-lg mb-4 '>Get surprised by our selection of random beers.</p>
				<img
					className='rounded-xl'
					src='../assets/random-beer.png'
					alt='random beer'
				/>
			</div>
			<div
				onClick={() => (window.location.href = '/new-beer')}
				className='cursor-pointer w-1/4 hover:text-sky-500 transition-all'>
				<h1 className='text-4xl font-medium mb-2'>New Beer</h1>
				<p className='text-lg mb-4 '>Create your own beer and add it to our collection.</p>
				<img
					className='rounded-xl'
					src='../assets/new-beer.png'
					alt='new beer'
				/>
			</div>
		</div>
	)
}

export default HomePage
