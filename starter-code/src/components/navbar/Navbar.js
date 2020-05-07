import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import home from './../../home.svg'

class Navbar extends Component {
	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<>
				<nav className='menu'>
					<ul>
						<li>
							<NavLink to='/' exact>
								<img src={home} />
							</NavLink>
						</li>
					</ul>
				</nav>
			</>
		)
	}
}

export default Navbar
