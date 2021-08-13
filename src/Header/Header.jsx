import React from 'react'
import HomeLogo from "../assets/home.png";
import { Link } from 'react-router-dom';
import '../Header/Header.css';

const Header = () => {
	return (
		<div>	
			<div className="HeaderContainer">
			<Link className="HeaderLogoLink" to="/">
			<img className="HomeLogo" src={HomeLogo} alt="home" />
			</Link>

			</div>
		
		</div>
	)
}

export default Header
