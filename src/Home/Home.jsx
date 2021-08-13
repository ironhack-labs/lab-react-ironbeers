
import { NavLink, Route } from "react-router-dom";
import React from "react";




const Home = () => {
	return (
		<div className = "Home">
			<h1 className="HomeTitle"> Welcome home !</h1>


		

			
		

		<ul> <NavLink to ="/beers"> Beers </NavLink>
		     <NavLink to ="/random-beer"> Random Beer </NavLink>
		     <NavLink to ="/new-beer"> New Beer </NavLink>
		
		</ul>
	
			
		</div>
	)
}


export default Home;