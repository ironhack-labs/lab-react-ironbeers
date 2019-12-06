import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { StyledCard, CardContainer } from "../../styles/componentStyles"; 

export default class Home extends Component {

	render(){
		return(
			<CardContainer>
				<Link to="/beers">
					<StyledCard>
					<h2>all beers</h2>
					
						{/* <img src="../../../../public/images/beers.png" alt="beers"/> */}
					</StyledCard>
				</Link>
        
				<Link to="/new-beer">
					<StyledCard>
					<h2>New Beer</h2>	
					</StyledCard>
				</Link>
					
				<Link to="/random-beer">
					<StyledCard>
					<h2>Random Beer</h2>
					</StyledCard>
				</Link>

			</CardContainer>
		)
	}
}