import React, { Component } from 'react'
import Header from './Header'
import { Route, Link, Switch } from 'react-router-dom'
import queryString from 'query-string'

export default class SingleBeer extends Component {

    state = {
        singleBeer: this.props.match.params.beerId,
        beer: ''
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.state.singleBeer}`)
          .then(res => res.json())
          .then(result => {
            console.log(result)
            this.setState({beer: result})
          })
          .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <Header />
                <img className="width-50" src={this.state.beer.image_url} alt="" />
                <h2>{this.state.beer.name}</h2>
                <p>{this.state.beer.tagline}</p>
                <p>{this.state.beer.first_brewed}</p>
                <p>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
            </div>
        )
    }
}
