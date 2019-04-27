import React, { Component, Fragment } from 'react';
import axios from 'axios';

class RandomBeer extends Component {

  constructor() {
    super()
    this.state = {
      beer: ''
    }
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers/random")
      .then(response => {
        this.setState({ beer: response.data[0] })
      })
  }

  render() {

    return (

      <div className="App">
    
            <Fragment>
            <div className="columns is-vcentered">
              <img src={this.state.beer.image_url} alt={this.state.beer.name} width="15%"/></div>

              <div className="columns">
              <div className="column"> <h1 className="title">{this.state.beer.name}</h1> </div>
              <div className="column"> <h2 className="subtitle">{this.state.beer.attenuation_level}</h2></div>
              </div>

              <div className="columns">
              <div className="column"> <h1 className="title">{this.state.beer.tagline}</h1> </div>
              <div className="column"> <h2 className="subtitle">{this.state.beer.first_brewed}</h2></div>
              </div>

              <div className="columns">
              <div className="column"> <span>{this.state.beer.description}</span><br></br>
              <span className="tag">Created by: {this.state.beer.contributed_by}</span>
                </div>
              </div>

            </Fragment>
        

      </div>
    );
  }
}

export default RandomBeer;