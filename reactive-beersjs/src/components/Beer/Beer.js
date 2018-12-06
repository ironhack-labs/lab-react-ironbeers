import React, { Component } from 'react';

import NavBar from './../NavBar/NavBar';

import axios from 'axios'

export default class Beer extends Component {
  constructor() {
    super();

    this.state = {
      beer: null
    }

    //console.log('constructor')
  }

  componentDidMount() {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${this.props.match.params.id}`)
      .then(beer => {
        this.setState({...this.state, beer: beer.data})
      })
  }

  render() {
    console.log(this.state)
    return (
      
      <div>
        <NavBar />
        <h1>Beer</h1>

        {
          (this.state.beer) ? 
            <div>
              <img src={this.state.beer.image_url} />
              <p className="title">{this.state.beer.name}</p>
              <p className="atenuation">{this.state.beer.attenuation_level}</p>
              <p className="tagline">{this.state.beer.tagline}</p>
              <p className="first-brewed">{this.state.beer.first_brewed}</p>
              <p className="description">{this.state.beer.description}</p>
              <p className="contributor">{this.state.beer.contributed_by}</p>

            </div>

            :

            <p>Loading...</p>
        }


      </div>
    )
  }
}
