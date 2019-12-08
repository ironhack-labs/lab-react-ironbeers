import React, {Component} from 'react'
import axios from 'axios'
import { StyledCardDetail} from "../../styles/componentStyles"; 

const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers';

export default class Detail extends Component {

    state = {}
  
    async componentDidMount() {
      const { data } = await axios.get(`${ENDPOINT}`)
      const beer = data.find( beer => beer._id === this.props.match.params.id );
      this.setState({ beer });
    }
  
    render(){
  
      const { beer } = this.state
      if (!beer) {
        return (
          <div className="App">
            
          </div>
        )
      }
    
  
      return(
      <>
        <StyledCardDetail>
          <div className="card">
            
            <img src={beer.image_url} alt={beer.name} width={"100px"} />
          
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