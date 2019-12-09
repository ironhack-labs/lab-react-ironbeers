import React, { Component } from "react";
import Header from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";

const ENDPOINT = 'https://ih-beer-api.herokuapp.com/beers';
class BeersContainer extends Component {
  state = {
    data: []
  }
  async componentDidMount() {
    const { data } = await axios.get(ENDPOINT)
    this.setState({ data })
  }

  render() {
    const { data } = this.state
    return (
      
      <div className="beersContainer" >
        
            <Header></Header>
            <div className="beersBox">
             {data.map((beer) =>{ 
            
               return (
               
              <Link key={beer._id} to={`/beers/${beer.id}`}>
              
              
              <img src={beer.image_url} alt={beer.name} width="80px" />
              <h3>{beer.name}</h3>
              <p>Description: {beer.description}</p>
              </Link>
             )})}
             </div>
      </div>
    )
  }
}

export default BeersContainer;

