import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import './randombeer.css';


class RandomBeer extends Component {
  constructor(props){
      super(props)
      this.state = {
        // editing: false,
      }      
  }

  render(){
    if (this.props.ready) {

    return (  
      <div className="wrapper">
        <div>
        <Navbar />
        </div>
        <div className="single-beer-container">
          <div className="row">
            <div className="single-beer-image"><img src={this.props.randomBeer.image_url} alt={this.props.randomBeer.name} /></div>
        </div>
        <div className="row">
          <span class="single-beer-name">{this.props.randomBeer.name}</span>
          <span class="single-beer-attenuation">{this.props.randomBeer.attenuation_level}</span>
        </div>
        <div className="row">
          <span className="single-beer-tagline">{this.props.randomBeer.tagline}</span>
          <span className="single-beer-brewed">{this.props.randomBeer.first_brewed}</span>
        </div>
        <div className="single-beer-description row">{this.props.randomBeer.description}</div>
        <div className="row single-beer-contributor">{this.props.randomBeer.contributed_by}</div>
        </div>
      </div>
      )
    } else
    return(<h3>loading...</h3>)
  }
}

export default RandomBeer;