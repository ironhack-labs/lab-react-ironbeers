import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { StyledCardBeers } from '../../styles/componentStyles'

const ENDPOINT = 'https://ih-beers-api2.herokuapp.com/beers'

export default class Beers extends Component {
  state = {
    beers: []
  }
  async componentDidMount() {
    const  {data}  = await axios.get(ENDPOINT)
    this.setState({ beers: [...data] })
  }
  render() {
    const { beers } = this.state
    return (     
  <>
    <StyledCardBeers>
      {beers.map(beer => (
        <>
          <Link  key={beer._id} to={`/beers/${beer._id}`}> 
            <div className="card">
              <img src={beer.image_url} alt={beer.name}/>   
                <div className="container">
                  <h2 >{beer.name}</h2>
									<h4>{beer.tagline}</h4>
									<p>Created by: {beer.contributed_by}</p>
                </div>  
            </div> 
          </Link>   
        </>
      ))}
    </StyledCardBeers> 
  </>     

        
      
      
      
      
    )
  }
}
