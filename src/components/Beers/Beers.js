import React, { Component } from 'react'
import BeerService from './../Service/Service'

import { Link } from 'react-router-dom';

class Beers extends Component {
    constructor() {
        super()
        this.state = {
            beers: ''
        }
        this.beerService = new BeerService()
    }

    componentDidMount() {
        this.beerService
            .getAllBeers()
            .then(response => this.setState({beers: response.data}))
            .catch(err => console.log(err))
    }

    render() {
        return (
          <>
            <div>
              {!this.state.beers ? (
                <h3>Cargando...</h3>
              ) : (
                <div>
                  {this.state.beers.map((elm) => (
                    <div key={elm._id}>
                      <image src={elm.image_url} alt={elm.name}/>
                          <Link to={`beers/${elm._id}`}>{elm.name}</Link>
                          <h2>{elm.tagline}</h2>
                          <h3>Created by: {elm.contributed_by}</h3>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        );
    }
}

export default Beers