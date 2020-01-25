import React, { Component } from 'react';
import Navbar from './Navbar';

class SingleBeer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getRandom();
    console.log(this.props.randomBeer);
  }

  render() {
    return (
      <div>
        <Navbar />
        {
          this.props.isRandom && this.props.randomBeer ? 
          (
            <div className='random-beer-display'>
              <img src={this.props.randomBeer.image_url} alt=""/>
              <h1> { this.props.randomBeer.name } </h1>
              <span>{this.props.randomBeer.attenuation_level}</span>
              <h3> {this.props.randomBeer.tagline}</h3>
              <span>{this.props.randomBeer.first_brewed}</span>
              <p>{this.props.randomBeer.description}</p>
              <p>{this.props.randomBeer.contributed_by}</p>
            </div>
          )
          :
          (
            <div>
              <h1> Not Random</h1>
            </div>
          )
        }
      </div>
    )
  }
}

export default SingleBeer;

// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by