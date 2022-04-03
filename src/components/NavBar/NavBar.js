import React from "react";
import { HomeLogo } from "../../assets/homeLogo";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-info">
			<div className="container-fluid d-flex justify-content-center">
				<a className="navbar-brand" href="/">
					<HomeLogo />
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
