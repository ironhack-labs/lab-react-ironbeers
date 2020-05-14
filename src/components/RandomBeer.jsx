import React, { Component } from 'react'
import Header from './Header'

export default class RandomBeer extends Component {

    state = {
        randomBeer: ''
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then(res => res.json())
          .then(result => {
            console.log(result)
            this.setState({randomBeer: result})
          })
          .catch(e => console.log(e))
    }

    render() {
        return (
            <div>
                <Header />
                <img className="width-50" src={this.state.randomBeer.image_url} alt="" />
                <h2>{this.state.randomBeer.name}</h2>
                <p>{this.state.randomBeer.tagline}</p>
                <p>{this.state.randomBeer.first_brewed}</p>
                <p>{this.state.randomBeer.attenuation_level}</p>
                <p>{this.state.randomBeer.description}</p>
                <p>{this.state.randomBeer.contributed_by}</p>
            </div>
        )
    }
}
