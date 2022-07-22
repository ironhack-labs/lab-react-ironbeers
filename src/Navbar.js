import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import homePic from './assets/home.png';
import './App.css';

export default function Navbar(props) {
const navigate = useNavigate();	
const handleSearch = event => {
	navigate('/beers')
    console.log(event.target)
    props.setSearch(event.target.value)
}
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
                    <input type='text' value={props.search} onChange={handleSearch} placeholder='search for a beer' />
				</li>
			</ul>
		</div>
	)
}