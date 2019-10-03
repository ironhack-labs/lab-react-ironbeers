import React, { Component } from 'react'
import axios from 'axios'

export default class SingleBeer extends Component {
  state = {
    beer: {}
  }


  componentDidMount() {
    axios.get(`https://api.punkapi.com/v2/beers/${this.props.match.params.id}`).then(beer => {
      this.setState({
        beer: beer.data[0]
      })
    }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <div className="col-xs-12 mx-auto">
        <img src={this.state.beer.image_url} alt="" className="beer-image2"/>
        <div className="beer-row">
          <div>
              <h1>{this.state.beer.name}</h1>
              <h2>{this.state.beer.tagline}</h2>
            </div>
            <div>
              <p>{this.state.beer.first_brewed}</p>
              <p>{this.state.beer.attenuation_level}</p>
            </div>
          </div>
            
            <div>
              <p>{this.state.beer.description}</p>
              <sub>{this.state.beer.contributed_by}</sub>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


// image
// name
// tagline
// first_brewed
// attenuation_level
// description
// contributed_by