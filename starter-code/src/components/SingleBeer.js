import React, { Component } from 'react';
import Navbar from './Navbar';

class SingleBeer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.randomBeer) {
      return this.props.getRandom();
    } else {
      let beerId = this.props.match.params.beerId;
      this.props.getBeer(beerId);
    }
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
            this.props.theBeer ?
            (
              <div className='random-beer-display'>
              <img src={this.props.theBeer.image_url} alt=""/>
              <h1> { this.props.theBeer.name } </h1>
              <span>{this.props.theBeer.attenuation_level}</span>
              <h3> {this.props.theBeer.tagline}</h3>
              <span>{this.props.theBeer.first_brewed}</span>
              <p>{this.props.theBeer.description}</p>
              <p>{this.props.theBeer.contributed_by}</p>
              </div>
            )
            :
            (
              <h3> Error loading beer </h3>
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