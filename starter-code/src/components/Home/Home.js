import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { StyledCard, CardContainer } from "../../styles/componentStyles"; 

export default class Home extends Component {

	render(){
		return(
			<CardContainer>
				<Link to="/beers">
					<StyledCard>
						all beers
					</StyledCard>
				</Link>
        
				<Link to="/new-beer">
					<StyledCard>
						New Beer
					</StyledCard>
				</Link>
					
				<Link to="/random-beer">
					<StyledCard>
						Random Beer
					</StyledCard>
				</Link>

			</CardContainer>
		)
	}
}