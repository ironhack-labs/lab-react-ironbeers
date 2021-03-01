import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Details extends Component {
    state = {
        beer: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    beer: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (!this.state.beer) {
            return <h3>Loading</h3>
        }
    
        return (
            <div className="App">
            <Link to='/'>
                  Home
            </Link>
                <h1>{this.state.beer.name}</h1>
                <img src={this.state.beer.image_url} width="100px" alt=""/>
                <p style={{color: 'grey'}}>{this.state.beer.tagline}</p>
                <p><b>{this.state.beer.first_brewed}</b></p>
                <p style={{color: 'grey'}}>{this.state.beer.attenuation_level}</p>
                <p>{this.state.beer.description}</p>
                <p>{this.state.beer.contributed_by}</p>
                </div>
        )
    }
}

