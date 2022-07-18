import React from 'react'
import homeLinkImg from './logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<div className='HomeLinkContainer'>
			<ul>
				<li>
                <Link to="/">
                    <img className="HomeImgLink" src={homeLinkImg} alt="homeLinkImg" />
                </Link>
				</li>
			
			</ul>
		</div>
	)
}