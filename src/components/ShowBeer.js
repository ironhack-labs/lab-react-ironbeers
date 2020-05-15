import React, { Component } from 'react'
import Header from './Header'

export default class ShowBeer extends Component {

    state = {
        beers:[]
      }

    componentDidMount() {
        console.log('Beers.js - component did mount');
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
         .then(res => res.json())
         .then(result => {
        console.log(result)
        this.setState({beers: result})
      })
      .catch(e => console.log(e))
      }
    
      render() {
        return (
          <React.Fragment>
          <Header />
         
          <div>
                        <h1>{this.state.beers.name}</h1>
                        <img src={this.state.beers.image_url} alt='beer' className='beerimg' />
                        <h2>{this.state.beers.tagline}</h2>
                        <h3>First brewed {this.state.beers.first_brewed}</h3>
                        <h4>Attenuation level {this.state.beers.attenuation_level}</h4>
                        <p>{this.state.beers.description}</p>
                        <p>{this.state.beers.contributed_by}</p>
          </div>
          </ React.Fragment>
        )
      }
    }
