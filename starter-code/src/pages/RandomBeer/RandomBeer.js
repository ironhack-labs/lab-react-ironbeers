import React, {Component} from 'react'
import axios from 'axios'
import { StyledCardDetail} from "../../styles/componentStyles"; 


export default class RandomBeer extends Component {
	state = {
		beer: {}
	}

	async componentDidMount() {
		const { data } = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
		this.setState({ beer:data })
	}

	render(){
		const {beer} = this.state
		return(
		<>
		   <StyledCardDetail>
			   <div className="card">
				   <img src={beer.image_url} alt={beer.name}/>
				         <div className="container">  
	                        <h2>{beer.name} <span>{beer.attenuation_level}</span></h2>
			                <h4>{beer.tagline} <span>{beer.first_brewed}</span></h4>
			                <p>{beer.description}</p>
			                <small>{beer.contributed_by}</small>
	                     </div>
              </div>
           </StyledCardDetail>   
        </>
		)
	}
}




