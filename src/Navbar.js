import React from 'react'
import { Link } from 'react-router-dom'
import homePic from './assets/home.png'
import './App.css'

export default function Navbar() {
	return (
		<div>
			<ul className='navBar'>
                <img src={homePic} alt='homepic' />
                <li>
                    <Link to='/'>Home</Link>
				</li>
				<li>
                    <Link to='/beers'>All Beers</Link>
				</li>
				<li>
                    <Link to='/beers/random'>Random Beer</Link>
				</li>
				<li>
                    <Link to='/beers/new'>New Beer</Link>
				</li>
                <li>
                    <Link to='/beers/search'>Search for a Beer</Link>
				</li>
			</ul>
		</div>
	)
}