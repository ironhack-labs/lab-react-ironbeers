import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Beer extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    axios.get("https://api.punkapi.com/v2/beers")
      .then(response => {
        this.setState({ beers: response.data })
      })
  }

  render() {
    return (

      <div className="App">
        {
          this.state.beers.map(beer => (
            <Fragment>
            <div className="columns is-vcentered">
              <div className="column is-one-quarter"><img src={beer.image_url} alt={beer.name} width="15%"/></div>
              <div className="column has-text-left">              <h1 className="title">{beer.name}</h1>
                <h5 className="subtitle">{beer.tagline}</h5>
                <span className="tag">Created by: {beer.contributed_by}</span>
                </div>
            </div>
            </Fragment>
    )
          )
        }

      </div>
    );
  }
}

export default Beer;