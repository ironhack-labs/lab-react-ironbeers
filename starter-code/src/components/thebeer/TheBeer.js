import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import './thebeer.css';


class TheBeer extends Component {
  constructor(props){
      super(props)
      this.state = {
        // editing: false,
      }      
  }

  render(){
    if (this.props.ready) {
    const allTheBeers = this.props.allTheBeers;
    const theID = this.props.match.params.theID;
    const theActualBeer = allTheBeers.find((theBeer)=>{
      return theBeer._id === theID
  })

  return (  
    <div className="wrapper">
      <div>
      <Navbar />
      </div>
      <div className="single-beer-container">
        <div className="row">
          <div className="single-beer-image"><img src={theActualBeer.image_url} alt={theActualBeer.name} /></div>
      </div>
      <div className="row">
        <span class="single-beer-name">{theActualBeer.name}</span>
        <span class="single-beer-attenuation">{theActualBeer.attenuation_level}</span>
      </div>
      <div className="row">
        <span className="single-beer-tagline">{theActualBeer.tagline}</span>
        <span className="single-beer-brewed">{theActualBeer.first_brewed}</span>
      </div>
      <div className="single-beer-description row">{theActualBeer.description}</div>
      <div className="row single-beer-contributor">{theActualBeer.contributed_by}</div>
      </div>
    </div>
    )
  } else
    return(<h3>loading...</h3>)
  }
}

export default TheBeer;