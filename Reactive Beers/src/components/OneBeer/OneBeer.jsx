import React, { Component } from 'react'
import BeerService from "../beerService/BeerService"








export default class OneBeer extends Component {
  constructor(props){
    super(props)
    this.state={
      beer:[],
    
      
      
}
    this.BeerService = new BeerService();
    this.oneBeer();
  }

  
  oneBeer = () =>{
    this.BeerService.oneBeer()
    .then((beer) => {
      const singleBirra = beer.find((beer) => {
        return beer._id === this.props.match.params._id;
      });

      this.setState(singleBirra);
     
    })
    .catch((err) => console.log(err));
};
  
    
  render() {
   
    return (
      <div className="random-beer">
      
      

      <div className="random-text">
        <div>
        <img src={this.state.image_url} alt="beer" />
          <div className="random-name">{this.state.name}</div>
          <div className="random-level">{this.state.attenuation_level}</div>
        </div>

        <div>
          <div className="random-tag">{this.state.tagline}</div>
          <div className="random-brewed">{this.state.first_brewed}</div>
        </div>

        <div>
          {this.state.description}
          {this.state.contributed_by}
        </div>
      </div>
    </div>
  
   )
  }
          
      
}      