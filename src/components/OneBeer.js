import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import axios from 'axios'

export default class OneBeer extends Component {

    constructor(props) {
        super(props);
        this.state = {
          beer: {},
        };
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                beer: response.data
            })
          })
          .catch(e => console.log(e));
      }

    render() {
        return (
            <div>
                <Header />
                <h1>Beer Details</h1>
                <div>
                    <img src={this.state.beer.image_url} alt="Beer logo" style={{width: '10%'}} />
                    <h1>{this.state.beer.name}</h1>
                    <h3>{this.state.beer.tagline}</h3>
                    <p>{this.state.beer.description}</p>
                    <p>First brewed: {this.state.beer.first_brewed}</p>
                    <p>Attenuation level: {this.state.beer.attenuation_level}</p>
                    <p>Contributed by: {this.state.beer.contributed_by}</p>
                </div> 
                <Link to='/beers'>All Beers</Link>
            </div>
        )
    }
}
