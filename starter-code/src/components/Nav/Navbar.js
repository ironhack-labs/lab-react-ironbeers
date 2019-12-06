import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { StyledNavbar } from "../../styles/componentStyles"; 

export default class Navbar extends Component {

	render(){
		return(
			<Link to="/">
					<StyledNavbar>Im a navbar I will take you home</StyledNavbar>
			</Link>
		)
	}
}